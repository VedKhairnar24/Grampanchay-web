import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Plus, Edit, Trash2 } from 'lucide-react';
import { getStaff, createStaff, updateStaff, deleteStaff } from '../services/adminApi';

interface StaffMember {
  _id?: string;
  name: string;
  position: string;
  contact: string;
  email?: string;
}

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<StaffMember>({
    name: '',
    position: '',
    contact: '',
    email: '',
  });

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    try {
      setLoading(true);
      const data = await getStaff();
      setStaff(data);
    } catch (error) {
      console.error('Error loading staff:', error);
      alert('Failed to load staff members');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      if (editingId) {
        // Update existing staff
        await updateStaff(editingId, formData);
        alert('Staff member updated successfully!');
      } else {
        // Add new staff
        await createStaff(formData);
        alert('Staff member added successfully!');
      }
      
      setFormData({ name: '', position: '', contact: '', email: '' });
      setEditingId(null);
      setShowForm(false);
      loadStaff();
    } catch (error: any) {
      console.error('Error saving staff:', error);
      const message = error.response?.data?.message || 'Failed to save staff member';
      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (member: StaffMember) => {
    setFormData(member);
    setEditingId(member._id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this staff member?')) {
      return;
    }

    try {
      await deleteStaff(id);
      alert('Staff member deleted successfully!');
      loadStaff();
    } catch (error: any) {
      console.error('Error deleting staff:', error);
      const message = error.response?.data?.message || 'Failed to delete staff member';
      alert(message);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', position: '', contact: '', email: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Staff</h1>
          <p className="text-muted-foreground">Manage staff members and their information</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Staff Member' : 'Add New Staff Member'}</CardTitle>
            <CardDescription>
              {editingId ? 'Update staff member information' : 'Enter details for the new staff member'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Saving...' : editingId ? 'Update' : 'Add'} Staff Member
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel} disabled={submitting}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading staff members...</p>
        </div>
      ) : staff.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No staff members added yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <Card key={member._id}>
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription>{member.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <span className="font-medium">Contact:</span> {member.contact}
                  </p>
                  {member.email && (
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {member.email}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(member)}
                    className="flex-1"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(member._id!)}
                    className="flex-1"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Staff;
