import Heading from "@/components/article/heading";
import ListItem from "@/components/article/list-item";
import Paragraph from "@/components/article/paragraph";
import SectionHeading from "@/components/article/section-heading";
import SubHeading from "@/components/article/subheading";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import MainNavbar from "@/components/main-navbar";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DonationCard from "@/components/donation/donation-card";
import ProgressDonation from "@/components/donation/progress/progress";
import DonateButton from "@/components/donation/donate-button";
import ShareButton from "@/components/donation/share-button";
import DonorsList from "@/components/donation/donors/donors-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-slate-100">
      <MainNavbar />
      <Banner />
      <section className="sm:container flex">
        <article className="grow flex flex-col items-center bg-white shadow-md pb-14">
          <Hero src="/header01.jpg" />
          <div className="pl-2 sm:pl-4">
            <Heading className="pb-5">
              Cultivate Calm: Transformative Meditation for Mental Well-being
            </Heading>
            <section className="lg:hidden pr-2 sm:px-4">
              <ProgressDonation />

              <div className="flex">
                <DonateButton />
              </div>
              <div className="flex justify-end">
                <ShareButton />
              </div>
            </section>
            <div className="sm:px-3 pt-2">
              <SubHeading>Description:</SubHeading>
              <Separator className="max-w-3xl" />

              <SectionHeading>Introduction:</SectionHeading>
              <Paragraph>
                Embark on a journey to inner peace and mental well-being with
                our fundraising campaign for transformative meditation. Join us
                in creating a community dedicated to fostering mindfulness and
                mental resilience.
              </Paragraph>
              <SectionHeading>About Transformative Meditation:</SectionHeading>
              <Paragraph>
                In a world filled with constant noise and stress, transformative
                meditation offers a sanctuary for self-discovery and mental
                renewal. Our mission is to make the benefits of meditation
                accessible to all, empowering individuals to lead healthier,
                more balanced lives.
              </Paragraph>
              <SectionHeading>Why We Need Your Support:</SectionHeading>
              <Paragraph>
                Mental well-being is a universal concern, and many individuals
                face barriers in accessing meditation resources. With your
                support, we can break down these barriers and make
                transformative meditation accessible to diverse communities.
              </Paragraph>
              <SectionHeading>How Your Contribution Helps:</SectionHeading>
              <div>
                <ListItem>
                  <Paragraph className="p-0">
                    <span className="font-semibold">
                      Guided Meditation Programs:
                    </span>{" "}
                    Fund meditation programs led by experienced instructors,
                    providing accessible and inclusive sessions for individuals
                    of all backgrounds.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph className="p-0">
                    <span className="font-semibold">Community Outreach:</span>{" "}
                    Expand our outreach initiatives to bring the benefits of
                    meditation to schools, workplaces, and communities that may
                    not have easy access to such resources.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph className="p-0">
                    <span className="font-semibold">
                      Technology and Resources:
                    </span>{" "}
                    Develop user-friendly meditation apps and provide resources
                    to support individuals on their mindfulness journey.
                  </Paragraph>
                </ListItem>
              </div>
              <SectionHeading>Q&A Section:</SectionHeading>

              <Accordion type="single" collapsible className="w-full max-w-3xl">
                <AccordionItem value="qa-1">
                  <AccordionTrigger>
                    Q: What inspired this fundraising campaign?
                  </AccordionTrigger>
                  <AccordionContent>
                    A: This campaign is inspired by the belief that
                    transformative meditation is a powerful tool for mental
                    well-being. We&apos;ve witnessed the positive impact it can
                    have on individuals and want to make these benefits
                    accessible to as many people as possible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="qa-2">
                  <AccordionTrigger>
                    Q: How are the funds used?
                  </AccordionTrigger>
                  <AccordionContent>
                    A: Your funds will directly support guided meditation
                    programs, community outreach efforts, and the development of
                    resources to make transformative meditation accessible to
                    diverse populations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="qa-3">
                  <AccordionTrigger>
                    Q: Can I see the impact of my donation?
                  </AccordionTrigger>
                  <AccordionContent>
                    A: Absolutely! We&apos;ll provide regular updates on the
                    expansion of our programs, the communities reached, and the
                    personal stories of individuals whose lives have been
                    positively transformed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <section className="sm:px-3 lg:hidden pt-2">
              <SectionHeading>Our Donors:</SectionHeading>

              <DonorsList />
            </section>
          </div>
        </article>
        <DonationCard className="hidden lg:block shadow-md sticky top-24" />
      </section>
    </main>
  );
}
