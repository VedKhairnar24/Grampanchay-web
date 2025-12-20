import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAnnouncements } from '../services/adminApi';
import api from '@/lib/api';
import { FileText, Users, ClipboardList, TrendingUp } from 'lucide-react';

interface Stats {
  totalAnnouncements: number;
  totalForms: number;
  pendingForms: number;
  recentAnnouncements: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalAnnouncements: 0,
    totalForms: 0,
    pendingForms: 0,
    recentAnnouncements: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      
      // Load announcements
      const announcements = await getAnnouncements();
      const totalAnnouncements = announcements.length;
      const recentAnnouncements = announcements.filter((ann: any) => {
        const created = new Date(ann.createdAt);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return created >= weekAgo;
      }).length;

      // Load forms
      const formsRes = await api.get('/forms/disabled');
      const forms = formsRes.data.record ? [formsRes.data.record] : formsRes.data || [];
      const totalForms = Array.isArray(forms) ? forms.length : 0;
      const pendingForms = Array.isArray(forms) 
        ? forms.filter((f: any) => f.status === 'Pending' || !f.status).length 
        : 0;

      setStats({
        totalAnnouncements,
        totalForms,
        pendingForms,
        recentAnnouncements,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Announcements',
      value: stats.totalAnnouncements,
      description: `${stats.recentAnnouncements} created this week`,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Forms',
      value: stats.totalForms,
      description: 'Disabled registration forms',
      icon: ClipboardList,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Pending Forms',
      value: stats.pendingForms,
      description: 'Requires attention',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Recent Activity',
      value: stats.recentAnnouncements,
      description: 'New announcements',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the admin panel</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading statistics...</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
              <h3 className="font-semibold mb-2">Manage Announcements</h3>
              <p className="text-sm text-muted-foreground">
                Create, edit, and manage public announcements
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
              <h3 className="font-semibold mb-2">View Forms</h3>
              <p className="text-sm text-muted-foreground">
                Review and manage submitted registration forms
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
