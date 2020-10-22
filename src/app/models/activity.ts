export interface IActivity {
    id: string;
    title: string;
    description: string;
    date: Date | null;
    category: string;
    city: string;
    venue: string;
}