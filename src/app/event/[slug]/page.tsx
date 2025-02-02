
type EventPageProps = {
    params: {
        slug: string;
    }
}

export default async function EventPage({params}: EventPageProps) {

    const slug = params.slug
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );

    const data = await response.json();

    console.log(data)

    return (
        <main>Event Page</main>
    )
}
