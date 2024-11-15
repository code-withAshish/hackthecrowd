export default function getApiUrl() {
    const environment = process.env.VERCEL_ENV!;

    if (environment === "production") {
        return `https://${process.env.VERCEL_URL!}`;
    } else {
        return process.env.NEXT_PUBLIC_API_URL!;
    }
}