import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { Header } from "@/components/header";
import { Ceremony } from "@/components/ceremony";
import { Gallery } from "@/components/gallery";
import { GiftRegistry } from "@/components/gift-registry";
import { Instagram } from "@/components/instagram";
import { DressCode } from "@/components/dress-code";
import { ConfirmAttendance } from "@/components/confirm-attendance";
import { MusicSuggestions } from "@/components/music-suggestions";
import { Accommodations } from "@/components/accommodations";
import { Footer } from "@/components/footer";
import { Thank } from "@/components/thank";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section with Couple Names */}
      <Header />

      {/* Countdown Section */}
      {/* <Countdown /> */}

      {/* Ceremony & Reception Details */}
      <Ceremony />

      {/* Gallery Section */}
      {/* <Gallery /> */}

      {/* Gift Registry Section */}
      <GiftRegistry />

      {/* Instagram Section */}
      <Instagram />

      {/* Dress Code Section */}
      <DressCode />

      {/* Confirm Attendance Section */}
      <ConfirmAttendance />

      {/* Song Suggestions Section */}
      <MusicSuggestions />

      {/* Accommodations Info */}
      <Accommodations />

      {/* Thank You Section */}
      <Thank />

      {/* Contact & Footer */}
      <Footer />
    </div>
  );
}
