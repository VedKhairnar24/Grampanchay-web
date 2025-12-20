import React from 'react';
import { Link, useLocation } from 'wouter';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [location] = useLocation();
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc', padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/admin/dashboard">
                <a style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  color: location === '/admin/dashboard' ? '#007bff' : '#333',
                  fontWeight: location === '/admin/dashboard' ? 'bold' : 'normal'
                }}>
                  Dashboard
                </a>
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/admin/announcements">
                <a style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  color: location === '/admin/announcements' ? '#007bff' : '#333',
                  fontWeight: location === '/admin/announcements' ? 'bold' : 'normal'
                }}>
                  Announcements
                </a>
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/admin/forms">
                <a style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  color: location === '/admin/forms' ? '#007bff' : '#333',
                  fontWeight: location === '/admin/forms' ? 'bold' : 'normal'
                }}>
                  Forms
                </a>
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/admin/staff">
                <a style={{ 
                  display: 'block', 
                  padding: '0.5rem', 
                  textDecoration: 'none',
                  color: location === '/admin/staff' ? '#007bff' : '#333',
                  fontWeight: location === '/admin/staff' ? 'bold' : 'normal'
                }}>
                  Staff
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
