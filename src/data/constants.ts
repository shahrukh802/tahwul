import {
    LayoutDashboard,
    Layers,
    CheckSquare,
    FileText,
    BarChart3,
    Users,
} from "lucide-react";

export const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/perspectives", label: "Perspectives", icon: Layers },
    { href: "/tasks", label: "Tasks", icon: CheckSquare },
    { href: "/documents", label: "Documents", icon: FileText },
    { href: "/reports", label: "Reports", icon: BarChart3 },
    { href: "/users", label: "Users & Roles", icon: Users },
];

export const EvidanceTableData = [
    {
        id: "5.4.1.1",
        name: "Digital_Transformation_Plan.Pdf",
        lead: "Ahmed Khaled",
        preparer: "Ahmed Khaled",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Approved",
    },
    {
        id: "5.4.1.2",
        name: "KPI_Framework.Xlsx",
        lead: "Mona Hamed",
        preparer: "Mona Hamed",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Pending Review",
    },
    {
        id: "5.4.1.3",
        name: "Roadmap_Version1.Docx",
        lead: "Rami AlSharif",
        preparer: "Rami AlSharif",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Pending Review",
    },
];

export const EvidanceTableComments = [
    {
        name: "Sara Ibrahim",
        initial: "E",
        date: "2025-08-05",
        text: "Ensure The Plan Includes A Clear Governance Model.",
    },
    {
        name: "Mona Hamed",
        initial: "M",
        date: "2025-08-05",
        text: "Ensure The Plan Includes A Clear Governance Model.",
    },
];
