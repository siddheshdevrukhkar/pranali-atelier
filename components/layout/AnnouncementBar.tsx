import Container from "@/components/shared/Container";
import { getAnnouncement } from "@/lib/content";

export default function AnnouncementBar() {
  const announcement = getAnnouncement();

  return (
    <div className="bg-[#2F2F2F] text-white" id="home">
      <Container>
        <p className="py-2 text-center text-sm tracking-wide">{announcement}</p>
      </Container>
    </div>
  );
}
