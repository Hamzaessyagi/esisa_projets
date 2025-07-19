"use client";

import * as React from "react";
import { useState, useMemo, type FC, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

// Main Section Imports
import AuthForms from "@/components/dashboard/auth-forms";
import CourseManagement from "@/components/dashboard/course-management";
import GradeManagement from "@/components/dashboard/grade-management";
import SchedulingTools from "@/components/dashboard/scheduling-tools";
import FileManagement from "@/components/dashboard/file-management";

// UI & Icon Imports for Shell
import {
  Bell,
  BookUser,
  CalendarDays,
  ChevronDown,
  LayoutDashboard,
  Menu,
  FileText,
  Users,
  GraduationCap,
  ClipboardList,
  BarChart3,
  Settings,
  Search,
  LogOut,
  User,
  Mail,
  ChevronsLeft,
  ChevronsRight,
  UserCheck,
  Briefcase,
  Home,
  FileClock,
  BookOpen,
  Server,
  File,
  Calendar,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// TYPES AND CONFIGURATION
type Role = "admin" | "teacher" | "student";
type ViewKey =
  | "dashboard"
  | "courses"
  | "grades"
  | "schedule"
  | "files"
  | "settings"
  | "user-management"
  | "enrollments"
  | "system-health"
  | "reports";

interface UserSession {
  isLoggedIn: boolean;
  role: Role;
}

interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  role: Role;
}

interface NavItem {
  key: ViewKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const themeConfig = {
  admin: {
    primary: "var(--admin-primary)",
    background: "var(--admin-background)",
    textClass: "text-amber-600",
    bgClass: "bg-amber-500",
    badgeClass: "bg-[var(--admin-background)] text-[var(--admin-primary)] border-[var(--admin-primary)]/50",
  },
  teacher: {
    primary: "var(--teacher-primary)",
    background: "var(--teacher-background)",
    textClass: "text-cyan-600",
    bgClass: "bg-cyan-500",
    badgeClass: "bg-[var(--teacher-background)] text-[var(--teacher-primary)] border-[var(--teacher-primary)]/50",
  },
  student: {
    primary: "var(--student-primary)",
    background: "var(--student-background)",
    textClass: "text-purple-600",
    bgClass: "bg-purple-500",
    badgeClass: "bg-[var(--student-background)] text-[var(--student-primary)] border-[var(--student-primary)]/50",
  },
};

const navItemsByRole: Record<Role, NavItem[]> = {
  admin: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "courses", label: "Course Management", icon: BookOpen },
    { key: "grades", label: "Grade Management", icon: GraduationCap },
    { key: "schedule", label: "Scheduling", icon: CalendarDays },
    { key: "files", label: "File Storage", icon: FileText },
    { key: "user-management", label: "User Management", icon: Users },
    { key: "reports", label: "Reports", icon: BarChart3 },
    { key: "settings", label: "Settings", icon: Settings },
  ],
  teacher: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "courses", label: "My Classes", icon: BookUser },
    { key: "grades", label: "Gradebook", icon: GraduationCap },
    { key: "schedule", label: "Calendar", icon: CalendarDays },
    { key: "files", label: "Files", icon: FileText },
  ],
  student: [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "courses", label: "My Courses", icon: BookOpen },
    { key: "grades", label: "Grades", icon: GraduationCap },
    { key: "schedule", label: "Calendar", icon: CalendarDays },
    { key: "files", label: "My Files", icon: FileClock },
  ],
};

const mockUser: Record<Role, UserProfile> = {
  admin: { name: "Alex Johnson", email: "alex.j@example.com", avatarUrl: "/avatars/01.png", role: "admin" },
  teacher: { name: "Dr. Evelyn Reed", email: "e.reed@example.edu", avatarUrl: "/avatars/02.png", role: "teacher"},
  student: { name: "Maria Garcia", email: "m.garcia@example.edu", avatarUrl: "/avatars/03.png", role: "student"},
};

// SHELL COMPONENTS ADAPTED FROM PROVIDED FILES
const AppSidebar: FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void; role: Role; user: UserProfile; activeView: ViewKey; setActiveView: (view: ViewKey) => void; }> = ({ isOpen, setIsOpen, role, user, activeView, setActiveView }) => {
  const navItems = navItemsByRole[role];
  const theme = themeConfig[role];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <SidebarContent role={role} user={user} isCollapsed={false} navItems={navItems} theme={theme} activeView={activeView} setActiveView={setActiveView} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex md:fixed md:inset-y-0 md:z-40">
        <motion.div
            animate={{ width: isOpen ? "256px" : "80px" }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex h-full flex-col bg-slate-900 text-white"
        >
          <div className="relative flex-1">
             <SidebarContent role={role} user={user} isCollapsed={!isOpen} navItems={navItems} theme={theme} activeView={activeView} setActiveView={setActiveView} />
             <Button
                variant="ghost" size="icon"
                className="absolute -right-4 top-16 h-8 w-8 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
                {isOpen ? <ChevronsLeft className="h-4 w-4" /> : <ChevronsRight className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const SidebarContent: FC<{ role: Role; user: UserProfile; isCollapsed: boolean; navItems: NavItem[], theme: any, activeView: ViewKey, setActiveView: (view: ViewKey) => void; }> = ({ role, user, isCollapsed, navItems, theme, activeView, setActiveView }) => (
  <div className="flex h-full flex-col px-4">
    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} h-20 border-b border-slate-800`}>
        <GraduationCap className={`h-8 w-8 text-white`} />
        {!isCollapsed && <span className="ml-3 text-xl font-bold">MYESISA</span>}
    </div>
    <nav className="mt-6 flex-1">
      <ul>
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => setActiveView(item.key)}
              className={`w-full flex items-center rounded-md p-3 my-1 text-sm font-medium transition-colors ${ isCollapsed ? 'justify-center' : ''} ${ activeView === item.key ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-4">{item.label}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    <div className={`mt-auto border-t border-slate-800 ${isCollapsed ? 'p-2' : 'p-4'}`}>
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        {!isCollapsed && (
          <div className="ml-3">
            <p className="text-sm font-semibold text-white">{user.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user.role}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const AppHeader: FC<{ onMenuClick: () => void; user: UserProfile; role: Role; onLogout: () => void; activeView: string; }> = ({ onMenuClick, user, role, onLogout, activeView }) => {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-8">
          <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick} aria-label="Open menu">
                  <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-semibold text-text-primary capitalize hidden sm:block">
                  {activeView.replace('-', ' ')}
              </h1>
          </div>
          <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="h-5 w-5" /></Button>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-2">
                           <Avatar className="h-8 w-8"><AvatarImage src={user.avatarUrl} alt={user.name} /><AvatarFallback>{user.name.charAt(0)}</AvatarFallback></Avatar>
                          <div className="hidden text-left md:block"><p className="text-sm font-medium text-text-primary">{user.name}</p><p className="text-xs text-text-secondary capitalize">{user.role}</p></div>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel><DropdownMenuSeparator />
                      <DropdownMenuItem><User className="mr-2 h-4 w-4" /> Profile</DropdownMenuItem>
                      <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem><DropdownMenuSeparator />
                      <DropdownMenuItem onClick={onLogout}><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </header>
    );
};

// DASHBOARD-SPECIFIC WIDGETS (copied from main-dashboard.tsx)
const WelcomeBanner: FC<{ user: UserProfile; role: Role }> = ({ user, role }) => { /* ... (code from main-dashboard.tsx) ... */
    const theme = themeConfig[role];
    const icons: Record<Role, React.ComponentType<{className?: string}>> = { admin: Briefcase, teacher: BookUser, student: GraduationCap };
    const Icon = icons[role];
    return (
        <Card className="mb-8" style={{ backgroundColor: theme.background }}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary">Welcome back, {user.name.split(' ')[0]}!</h2>
                        <p className="mt-1 text-text-secondary">Here's your overview for today. Stay productive!</p>
                    </div>
                    <div className="hidden sm:block"><Icon className="h-16 w-16" style={{color: theme.primary}}/></div>
                </div>
            </CardContent>
        </Card>
    );
}

const QuickActions: FC<{ role: Role }> = ({ role }) => { /* ... (code from main-dashboard.tsx) ... */
    const actions: Record<Role, { label: string; icon: React.ComponentType<{className?: string}> }[]> = {
        admin: [{ label: "Add User", icon: UserCheck }, { label: "System Settings", icon: Settings }, { label: "View Reports", icon: BarChart3 }],
        teacher: [{ label: "Create Assignment", icon: ClipboardList }, { label: "Grade Submissions", icon: GraduationCap }, { label: "Message Students", icon: Mail }],
        student: [{ label: "View Grades", icon: GraduationCap }, { label: "Submit Assignment", icon: FileText }, { label: "Contact Teacher", icon: Mail }],
    };
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {actions[role].map(({ label, icon: Icon }) => (
                    <Button key={label} variant="outline" className="flex flex-col items-center justify-center h-24 gap-2 text-center sm:h-28">
                        <Icon className="h-6 w-6 text-text-secondary"/><span className="text-xs sm:text-sm text-text-primary">{label}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
}

const StatCard: FC<{ title: string; value: string; icon: React.ComponentType<{className?: string}>; }> = ({ title, value, icon: Icon }) => ( /* ... code from main-dashboard ... */
    <Card><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium text-text-secondary">{title}</CardTitle><Icon className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold text-text-primary">{value}</div></CardContent></Card>
);

const AdminDashboardWidgets: FC = () => ( /* ... (code from main-dashboard.tsx) ... */
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="1,245" icon={Users} /><StatCard title="Active Courses" value="78" icon={BookOpen} /><StatCard title="Enrollments" value="+201 this month" icon={UserCheck} /><StatCard title="System Uptime" value="99.9%" icon={Server} />
    </div>
);
const TeacherDashboardWidgets: FC<{role: Role}> = ({role}) => { /* ... (code from main-dashboard.tsx) ... */
    const assignments = [{ course: "Calculus I", due: "2 days", submissions: 5 }, { course: "Physics 101", due: "4 days", submissions: 12 }];
    const theme = themeConfig[role];
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2"><CardHeader><CardTitle>Grading Queue</CardTitle><CardDescription>Assignments waiting for your review.</CardDescription></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Course</TableHead><TableHead>Due</TableHead><TableHead className="text-right">Submissions</TableHead></TableRow></TableHeader><TableBody>{assignments.map((item) => (<TableRow key={item.course}><TableCell className="font-medium">{item.course}</TableCell><TableCell>{item.due}</TableCell><TableCell className="text-right"><Badge variant="secondary" className={theme.badgeClass}>{item.submissions} waiting</Badge></TableCell></TableRow>))}</TableBody></Table></CardContent></Card>
            <Card><CardHeader><CardTitle>Class Roster Overview</CardTitle></CardHeader><CardContent className="space-y-4"><div className="flex justify-between items-center"><span>Calculus I</span><Badge variant="outline">28 Students</Badge></div><div className="flex justify-between items-center"><span>Physics 101</span><Badge variant="outline">35 Students</Badge></div><div className="flex justify-between items-center"><span>CompSci Intro</span><Badge variant="outline">42 Students</Badge></div></CardContent></Card>
        </div>
    );
};
const StudentDashboardWidgets: FC<{role: Role}> = ({role}) => { /* ... (code from main-dashboard.tsx) ... */
    const courses = [{ name: "Organic Chemistry", progress: 75 }, { name: "Literary Analysis", progress: 40 }, { name: "Statistics", progress: 85 }];
    const theme = themeConfig[role];
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2"><CardHeader><CardTitle>Current Courses</CardTitle><CardDescription>Your progress in ongoing courses.</CardDescription></CardHeader><CardContent className="space-y-6">{courses.map(course => (<div key={course.name}><div className="flex justify-between mb-1"><p className="text-sm font-medium text-text-primary">{course.name}</p><p className="text-sm text-text-secondary">{course.progress}%</p></div><Progress value={course.progress} className="w-full" indicatorClassName={theme.bgClass}/></div>))}</CardContent></Card>
            <Card><CardHeader><CardTitle>Upcoming Assignments</CardTitle></CardHeader><CardContent><ul className="space-y-4">{[{ name: 'Essay: The Great Gatsby', due: 'Tomorrow' }, { name: 'Problem Set 5', due: 'in 3 days' }].map(item => (<li key={item.name} className="flex items-start"><FileClock className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" style={{color: theme.primary}}/><div><p className="font-medium text-sm text-text-primary">{item.name}</p><p className="text-xs text-text-secondary">Due: {item.due}</p></div></li>))}</ul></CardContent></Card>
        </div>
    );
};
const DashboardContent: FC<{ role: Role }> = ({ role }) => ( /* ... (code from main-dashboard.tsx) ... */
    <> {role === "admin" && <AdminDashboardWidgets />} {role === "teacher" && <TeacherDashboardWidgets role={role}/>} {role === "student" && <StudentDashboardWidgets role={role}/>} </>
);
const OtherWidgets: FC = () => { /* ... (code from main-dashboard.tsx) ... */
    return (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5"/> Today's Schedule</CardTitle></CardHeader><CardContent><ul className="space-y-4">{[{ time: '10:00 AM', title: 'Calculus I - Lecture' }, { time: '1:00 PM', title: 'Physics 101 - Lab' }].map(event => (<li key={event.title} className="flex items-center"><span className="w-20 text-sm font-medium text-text-secondary">{event.time}</span><div className="h-8 border-l border-border mx-4"></div><p className="text-sm text-text-primary">{event.title}</p></li>))}</ul></CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><File className="h-5 w-5"/> Recent Files</CardTitle></CardHeader><CardContent><Table><TableBody>{[{ name: 'Lecture_Notes_W5.pdf', size: '2.3MB' }, { name: 'Assignment_3_Draft.docx', size: '156KB' }].map(file => (<TableRow key={file.name}><TableCell><FileText className="h-5 w-5 text-muted-foreground"/></TableCell><TableCell className="font-medium text-text-primary">{file.name}</TableCell><TableCell className="text-right text-text-secondary">{file.size}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card>
        </div>
    );
}

// MAIN PAGE COMPONENT
export default function HomePage() {
  const [user, setUser] = useState<UserSession | null>(null);
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const currentUser = useMemo(() => (user ? mockUser[user.role] : null), [user]);
  const handleLogin = (role: Role) => setUser({ isLoggedIn: true, role });
  const handleLogout = () => setUser(null);

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        if (!user) return null;
        return (
          <>
            <WelcomeBanner user={currentUser!} role={user.role} />
            <QuickActions role={user.role} />
            <DashboardContent role={user.role} />
            <OtherWidgets />
          </>
        );
      case "courses": return <CourseManagement />;
      case "grades": return <GradeManagement />;
      case "schedule": return <SchedulingTools />;
      case "files": return <FileManagement />;
      default:
        return (
          <Card>
            <CardHeader><CardTitle>{activeView.replace('-', ' ')}</CardTitle></CardHeader>
            <CardContent>
              <p>This component is not yet implemented.</p>
            </CardContent>
          </Card>
        );
    }
  };

  if (!user || !currentUser) {
    return (
      <div className="flex flex-col md:flex-row min-h-screen">
          <div className="md:w-1/2 flex items-center justify-center p-4">
              <AuthForms />
          </div>
          <div className="md:w-1/2 bg-background-secondary p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l">
              <div className="w-full max-w-md text-center">
                  <h2 className="text-xl font-semibold mb-4 text-text-primary">Simulation Controls</h2>
                  <p className="text-text-secondary mb-6">
                      Since this is a simulated environment, please select a role to proceed to the dashboard. The form on the left is for display only.
                  </p>
                  <div className="space-y-4">
                      <Button onClick={() => handleLogin('admin')} className="w-full bg-admin-primary hover:bg-admin-primary/90 text-primary-foreground">Log in as Admin</Button>
                      <Button onClick={() => handleLogin('teacher')} className="w-full bg-teacher-primary hover:bg-teacher-primary/90 text-primary-foreground">Log in as Teacher</Button>
                      <Button onClick={() => handleLogin('student')} className="w-full bg-student-primary hover:bg-student-primary/90 text-primary-foreground">Log in as Student</Button>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  const sidebarWidthClass = isSidebarOpen ? "md:ml-64" : "md:ml-20";

  return (
    <div className="min-h-screen bg-background-secondary text-text-primary font-sans">
      <AppSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        role={user.role}
        user={currentUser}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${sidebarWidthClass}`}
      >
        <AppHeader
          onMenuClick={() => setSidebarOpen((p) => !p)}
          user={currentUser}
          role={user.role}
          onLogout={handleLogout}
          activeView={activeView}
        />
        <main className="flex-1 p-6 md:p-8">
            <AnimatePresence mode="wait">
                 <motion.div
                    key={activeView}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                 >
                    {renderActiveView()}
                </motion.div>
            </AnimatePresence>
        </main>
      </div>
    </div>
  );
}