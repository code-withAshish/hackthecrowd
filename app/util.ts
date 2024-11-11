export default function getApiUrl() {
    const environment = process.env.CONTEXT!;

    if (environment === "production") {
        return `https://${process.env.URL!}`;
    } else {
        return process.env.NEXT_PUBLIC_API_URL!;
    }
}
