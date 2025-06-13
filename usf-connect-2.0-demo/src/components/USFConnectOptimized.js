// Copy the entire optimized component code from the previous artifact here
// This is the main USF Connect 2.0 platform component

import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart
} from 'recharts';
import { 
  Building2, TrendingUp, Users, Target, Calendar, 
  CheckCircle, AlertCircle, Clock, DollarSign, 
  Briefcase, GraduationCap, Lightbulb, Database,
  Plus, Filter, Search, Download, Bell, Award,
  FileText, Zap, Network, ArrowUp, ArrowDown,
  Eye, ChevronRight, Globe, Phone, Mail, Home,
  BarChart3, Settings, User, LogOut
} from 'lucide-react';

const USFConnectOptimized = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filterSector, setFilterSector] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loggedInCompany, setLoggedInCompany] = useState(null);
  const [portalLogin, setPortalLogin] = useState({ email: '', password: '' });
  const [quarterlyUpdate, setQuarterlyUpdate] = useState({
    quarter: '',
    revenue: '',
    employees: '',
    customers: '',
    funding: '',
    milestones: '',
    challenges: '',
    assistance: '',
    nextQuarter: ''
  });

  // Navigation items - consistent across all pages
  const navigationItems = [
    { id: 'dashboard', label: 'Portfolio Dashboard', icon: BarChart3, description: 'Real-time portfolio metrics and KPIs' },
    { id: 'companies', label: 'Portfolio Companies', icon: Building2, description: 'Manage and track portfolio companies' },
    { id: 'evolve', label: 'Evolve Program', icon: Target, description: '39-step startup journey tracking' },
    { id: 'applications', label: 'Venture Applications', icon: FileText, description: 'TBTI application processing and vetting' },
    { id: 'tto', label: 'Technology Transfer', icon: Lightbulb, description: 'USF IP licensing opportunities' },
    { id: 'research', label: 'Research Intelligence', icon: Database, description: 'AI-powered market research and analytics' },
    { id: 'analytics', label: 'Analytics & Reports', icon: TrendingUp, description: 'Data insights and performance reports' },
    { id: 'company-portal', label: 'Company Portal', icon: User, description: 'Portfolio company access and updates' }
  ];

  // Sample data for the platform
  const marketData = [
    { metric: "Portfolio Valuation", value: "$2.1B", change: "+15.2%", trend: "up", color: "green" },
    { metric: "Active Companies", value: "62", change: "+3", trend: "up", color: "green" },
    { metric: "Total Funding", value: "$450M", change: "+8.7%", trend: "up", color: "green" },
    { metric: "Jobs Created", value: "445", change: "+12", trend: "up", color: "green" },
    { metric: "Patents Filed", value: "315", change: "+5", trend: "up", color: "green" },
    { metric: "Revenue Generated", value: "$546M", change: "+22.1%", trend: "up", color: "green" },
    { metric: "Exit Value", value: "$850M", change: "0", trend: "neutral", color: "gray" },
    { metric: "Success Rate", value: "78%", change: "+2.1%", trend: "up", color: "green" }
  ];

  const portfolioCompanies = [
    {
      id: 1,
      name: "Alzamend Neuro",
      ticker: "ALZN",
      sector: "BioLife Sciences",
      stage: "Scale",
      tier: "Tier 1",
      funding: "$25M",
      valuation: "$120M",
      progress: 92,
      completedSteps: 35,
      totalSteps: 39,
      currentPhase: "Scale",
      risk: "Low",
      momentum: "Strong",
      evolveQuarter: "Q7",
      evolvePhase: "Preparing for Exit",
      status: "Accelerated",
      website: "alzamend.com"
    },
    {
      id: 2,
      name: "Bold Therapeutics",
      ticker: "BOLD",
      sector: "BioLife Sciences",
      stage: "Growth",
      tier: "Tier 1", 
      funding: "$33M",
      valuation: "$180M",
      progress: 82,
      completedSteps: 30,
      totalSteps: 39,
      currentPhase: "Growth",
      risk: "Medium",
      momentum: "Strong",
      evolveQuarter: "Q6",
      evolvePhase: "Funding & Network Expansion",
      status: "On Track",
      website: "bold-therapeutics.com"
    },
    {
      id: 3,
      name: "LumiCore Technology",
      ticker: "LUMI",
      sector: "Technology",
      stage: "Scale",
      tier: "Tier 1",
      funding: "$100M",
      valuation: "$500M",
      progress: 95,
      completedSteps: 37,
      totalSteps: 39,
      currentPhase: "Scale",
      risk: "Low",
      momentum: "Very Strong",
      evolveQuarter: "Q7",
      evolvePhase: "Preparing for Exit",
      status: "Accelerated",
      website: "lumicore.org"
    },
    {
      id: 4,
      name: "QuadricIT",
      ticker: "QUAD",
      sector: "AI/Enterprise Software",
      stage: "Growth",
      tier: "Tier 2",
      funding: "$250K",
      valuation: "$5M",
      progress: 65,
      completedSteps: 25,
      totalSteps: 39,
      currentPhase: "Launch",
      risk: "Medium",
      momentum: "Growing",
      evolveQuarter: "Q3",
      evolvePhase: "Execution & Scaling Efforts",
      status: "Under Review",
      website: "quadricit.com"
    }
  ];

  // FIERCE Initiative Component
  const FIERCEOverview = () => (
    <div style={{ 
      background: 'white',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      padding: '2rem',
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ 
          width: '3rem', 
          height: '3rem', 
          backgroundColor: '#00573F', 
          borderRadius: '0.5rem', 
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontWeight: '700',
          fontSize: '1rem'
        }}>
          USF
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>FIERCE Initiative</h2>
          <p style={{ color: '#6b7280', margin: 0 }}>Florida Industry-Engaged Research & Commercialization Enterprise</p>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#166534', marginBottom: '0.75rem' }}>Mission</h3>
        <p style={{ color: '#166534', margin: 0 }}>
          Regional initiative to build a connected, industry-driven research commercialization ecosystem across Florida through a centralized hub-and-spoke model.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>Innovation Hub</h4>
          <p style={{ fontSize: '0.875rem', color: '#1e40af', margin: 0 }}>Centralized resource coordination</p>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#92400e', marginBottom: '0.5rem' }}>Analytics & Tracking</h4>
          <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0 }}>Real-time data and insights</p>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#166534', marginBottom: '0.5rem' }}>Commercialization Training</h4>
          <p style={{ fontSize: '0.875rem', color: '#166534', margin: 0 }}>Faculty skill development</p>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#faf5ff', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔬</div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#7c2d12', marginBottom: '0.5rem' }}>Research Institute Conduit</h4>
          <p style={{ fontSize: '0.875rem', color: '#7c2d12', margin: 0 }}>Emerging institution support</p>
        </div>
      </div>
    </div>
  );

  // Main content renderer based on active tab
  const renderMainContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <FIERCEOverview />
            
            {/* Market Overview Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {marketData.map((data, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  border: '1px solid #e5e7eb',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.5rem' }}>{data.metric}</h3>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>{data.value}</div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '0.875rem', 
                      fontWeight: '500',
                      color: data.trend === 'up' ? '#059669' : data.trend === 'down' ? '#dc2626' : '#6b7280'
                    }}>
                      {data.trend === 'up' && <ArrowUp style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />}
                      {data.trend === 'down' && <ArrowDown style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />}
                      <span>{data.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div style={{ 
              background: 'white',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Actions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <button
                  onClick={() => setActiveTab('companies')}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Building2 style={{ width: '1.5rem', height: '1.5rem', color: '#059669', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Manage Portfolio</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>View and track companies</div>
                </button>
                <button
                  onClick={() => setActiveTab('applications')}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <FileText style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Review Applications</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>TBTI vetting process</div>
                </button>
                <button
                  onClick={() => setActiveTab('research')}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Database style={{ width: '1.5rem', height: '1.5rem', color: '#8b5cf6', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Research Intelligence</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>AI-powered insights</div>
                </button>
                <button
                  onClick={() => setActiveTab('tto')}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Lightbulb style={{ width: '1.5rem', height: '1.5rem', color: '#d97706', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Technology Transfer</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>IP licensing opportunities</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'companies':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>Portfolio Companies</h2>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select 
                  value={filterSector} 
                  onChange={(e) => setFilterSector(e.target.value)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="all">All Sectors</option>
                  <option value="biolife">BioLife Sciences</option>
                  <option value="technology">Technology</option>
                  <option value="ai">AI/Software</option>
                </select>
                <div style={{ position: 'relative' }}>
                  <Search style={{ width: '1rem', height: '1rem', position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '2.5rem', 
                      width: '200px',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '0.5rem', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Company</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Sector</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Stage</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Progress</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioCompanies.map(company => (
                      <tr key={company.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedCompany(company)}>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <div>
                            <div style={{ fontWeight: '500', color: '#111827' }}>{company.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{company.ticker}</div>
                          </div>
                        </td>
                        <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#111827' }}>{company.sector}</td>
                        <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#111827' }}>{company.stage}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ flex: 1, height: '0.5rem', backgroundColor: '#e5e7eb', borderRadius: '0.25rem', overflow: 'hidden' }}>
                              <div 
                                style={{ 
                                  height: '100%', 
                                  backgroundColor: '#00573F', 
                                  transition: 'width 0.3s ease',
                                  width: `${company.progress}%`
                                }}
                              />
                            </div>
                            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{company.progress}%</span>
                          </div>
                        </td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            backgroundColor: company.status === 'Accelerated' ? '#f3e8ff' : 
                                             company.status === 'On Track' ? '#dcfce7' : '#fef3c7',
                            color: company.status === 'Accelerated' ? '#7c2d12' : 
                                   company.status === 'On Track' ? '#166534' : '#92400e'
                          }}>
                            {company.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        // Add all other cases from the main component here
        return (
          <div style={{ 
            background: 'white',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p style={{ color: '#6b7280' }}>
              This section contains the {activeTab} functionality for the USF Connect platform.
            </p>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header with USF Connect Logo */}
      <header style={{
        background: 'linear-gradient(135deg, #00573F 0%, #2E7D32 100%)',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '2.5rem', 
                height: '2.5rem', 
                backgroundColor: 'white', 
                borderRadius: '0.5rem', 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#00573F',
                fontWeight: '700',
                fontSize: '0.875rem'
              }}>
                USF
              </div>
              <div>
                <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>Connect 2.0</h1>
                <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.9 }}>AI-Powered Innovation Ecosystem</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div style={{ 
                width: '0.5rem', 
                height: '0.5rem', 
                borderRadius: '50%', 
                backgroundColor: '#10b981',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></div>
              <span>Live Demo Active</span>
            </div>
            <button style={{ padding: '0.5rem', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Bell style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
            <button style={{ padding: '0.5rem', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Settings style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '2rem', 
                height: '2rem', 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <User style={{ width: '1rem', height: '1rem', color: 'white' }} />
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Demo User</span>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar - Consistent across all pages */}
        <aside style={{
          width: '280px',
          background: 'white',
          borderRight: '1px solid #e5e7eb',
          height: 'calc(100vh - 80px)',
          overflowY: 'auto',
          padding: '1rem 0'
        }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {navigationItems.map(item => (
                <li key={item.id} style={{ margin: '0.25rem 0' }}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1.5rem',
                      background: activeTab === item.id ? '#00573F' : 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: activeTab === item.id ? 'white' : '#6b7280',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      fontWeight: activeTab === item.id ? '500' : 'normal'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== item.id) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== item.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#6b7280';
                      }
                    }}
                    title={item.description}
                  >
                    <item.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer - Platform Statistics */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e7eb', marginTop: '1rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.75rem' }}>Platform Stats</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Active Companies</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#059669' }}>62</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Applications</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#2563eb' }}>24</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>TTO Opportunities</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#d97706' }}>47</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Success Rate</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#059669' }}>78%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: '2rem',
          overflowY: 'auto',
          height: 'calc(100vh - 80px)'
        }}>
          {renderMainContent()}
        </main>
      </div>

      {/* Add CSS for animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};

export default USFConnectOptimized;