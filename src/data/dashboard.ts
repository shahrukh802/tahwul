
export const ProgresStatusColors: any = {
    notStarted: "bg-[#8597A8] text-white", // Gray
    inProgress: "bg-[#F59F0A] text-white", // Amber/Orange
    completed: "bg-[#1EA54E] text-white", // Green
    partiallyUploaded: "bg-[#0078D7] text-white", // Dark Blue
    fullyUploaded: "bg-[#0078D7] text-white", // Light Blue
    delayed: "bg-[#F50A0A] text-white", // Red
};

export const ProgresStatusData = [
    {
        title: "Strategy And Planning",
        percentage: "97.78%",
        cards: [
            {
                title: "Digital Transformation",
                highlight: true,
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed", outline: true },
                ],
            },
            {
                title: "Digital Governance",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "inProgress" },
                ],
            },
            {
                title: "Enterprise Architecture",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Organization And Culture",
        percentage: "70.83%",
        cards: [
            {
                title: "Digital Culture And Environment",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "completed" },
                ],
            },
            {
                title: "Leadership Development",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                ],
            },
            {
                title: "Skills & Capacity Building",
                steps: [
                    { id: 1, status: "inProgress" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                ],
            },
        ],
    },
    {
        title: "Operations And Execution",
        percentage: "80.00%",
        cards: [
            {
                title: "Business Processes",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                    { id: 4, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Business Continuity",
        percentage: "90.59%",
        cards: [
            {
                title: "Risk Management",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                    { id: 5, status: "completed" },
                ],
            },
            {
                title: "Business Continuity",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "notStarted" },
                    { id: 3, status: "notStarted" },
                    { id: 4, status: "completed" },
                    { id: 5, status: "completed" },
                    { id: 6, status: "notStarted" },
                    { id: 7, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Information Technology",
        percentage: "75.00%",
        cards: [
            {
                title: "Support Systems",
                steps: [
                    { id: 1, status: "fullyUploaded" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                    { id: 5, status: "completed" },
                ],
            },
            {
                title: "IT Infrastructure",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                    { id: 5, status: "fullyUploaded" },
                    { id: 6, status: "completed" },
                    { id: 7, status: "completed" },
                ],
            },
            {
                title: "Cloud Infrastructure",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "fullyUploaded" },
                ],
            },
        ],
    },
    {
        title: "Comprehensive Governance",
        percentage: "64.44%",
        cards: [
            {
                title: "Governance Platforms",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "notStarted" },
                    { id: 5, status: "completed" },
                    { id: 6, status: "completed" },
                    { id: 7, status: "completed" },
                    { id: 8, status: "completed" },
                    { id: 9, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Channels And Services",
        percentage: "100%",
        cards: [
            {
                title: "Service Quality",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                ],
            },
            {
                title: "Digital Channels",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Beneficiary Centralization",
        percentage: "60.00%",
        cards: [
            {
                title: "User Engagement",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                    { id: 4, status: "inProgress" },
                ],
            },
            {
                title: "User Relationship",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                ],
            },
            {
                title: "User Experience",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "completed" },
                    { id: 4, status: "inProgress" },
                    { id: 5, status: "completed" },
                ],
            },
        ],
    },
    {
        title: "Government Data",
        percentage: "87.50%",
        cards: [
            {
                title: "Data Governance",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                ],
            },
            {
                title: "Data Usage & Availability",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "inProgress" },
                    { id: 3, status: "inProgress" },
                ],
            },
            {
                title: "Open Data",
                steps: [
                    { id: 1, status: "completed" },
                    { id: 2, status: "completed" },
                    { id: 3, status: "inProgress" },
                ],
            },
        ],
    },
    {
        title: "Research And Innovation",
        percentage: "17.65%",
        cards: [
            {
                title: "Innovation",
                steps: [
                    { id: 1, status: "delayed" },
                    { id: 2, status: "delayed" },
                    { id: 3, status: "delayed" },
                    { id: 4, status: "delayed" },
                ],
            },
            {
                title: "Creative Solutions",
                steps: [
                    { id: 1, status: "inProgress" },
                    { id: 2, status: "delayed" },
                ],
            },
        ],
    },
];
