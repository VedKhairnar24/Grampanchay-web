import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getDisabledForms, updateDisabledForm, deleteDisabledForm } from '../services/adminApi';
import { ClipboardList, Search, Filter, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FormSubmission {
  _id: string;
  fullName: string;
  address: string;
  disabilityType: string;
  contactNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Forms: React.FC = () => {
  const [forms, setForms] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadForms();
  }, []);

  const loadForms = async () => {
    try {
      setLoading(true);
      const data = await getDisabledForms();
      setForms(Array.isArray(data) ? data : []);
    } catch (error: any) {
      console.error('Error loading forms:', error);
      if (error.response?.status === 404 || error.response?.status === 405) {
        setForms([]);
      } else {
        alert('Failed to load forms');
      }
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDisabledForm(id, newStatus);
      loadForms();
      alert('Status updated successfully!');
    } catch (error: any) {
      console.error('Error updating status:', error);
      const message = error.response?.data?.message || 'Failed to update status';
      alert(message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this form submission?')) {
      return;
    }

    try {
      await deleteDisabledForm(id);
      loadForms();
      alert('Form deleted successfully!');
    } catch (error: any) {
      console.error('Error deleting form:', error);
      const message = error.response?.data?.message || 'Failed to delete form';
      alert(message);
    }
  };

  const filteredForms = forms.filter(form => {
    const matchesSearch = 
      form.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.contactNumber?.includes(searchTerm) ||
      form.disabilityType?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || form.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', label: string }> = {
      'Pending': { variant: 'secondary', label: 'Pending' },
      'Approved': { variant: 'default', label: 'Approved' },
      'Rejected': { variant: 'destructive', label: 'Rejected' },
    };
    
    const statusInfo = statusMap[status] || { variant: 'outline' as const, label: status || 'Pending' };
    
    return (
      <Badge variant={statusInfo.variant}>
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Forms</h1>
          <p className="text-muted-foreground">View and manage submitted registration forms</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, contact, or disability type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading forms...</p>
        </div>
      ) : filteredForms.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <ClipboardList className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              {forms.length === 0 
                ? 'No forms submitted yet.' 
                : 'No forms match your search criteria.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredForms.map((form) => (
            <Card key={form._id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{form.fullName}</CardTitle>
                    <CardDescription>
                      Submitted: {new Date(form.createdAt).toLocaleString()}
                    </CardDescription>
                  </div>
                  {getStatusBadge(form.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Address</p>
                    <p>{form.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Contact Number</p>
                    <p>{form.contactNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Disability Type</p>
                    <p>{form.disabilityType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Actions</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={form.status === 'Approved' ? 'default' : 'outline'}
                        onClick={() => updateStatus(form._id, 'Approved')}
                        disabled={form.status === 'Approved'}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant={form.status === 'Rejected' ? 'destructive' : 'outline'}
                        onClick={() => updateStatus(form._id, 'Rejected')}
                        disabled={form.status === 'Rejected'}
                      >
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(form._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forms;
