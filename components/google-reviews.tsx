import { ExternalLink, Star } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Review = {
  name: string;
  excerpt: string;
  age: string;
};

// These five review excerpts were supplied from the business's Google profile.
// Keep wording as provided and link visitors to the profile for the original reviews.
const reviews: Review[] = [
  {
    name: "Ajay Hipparge",
    age: "Recently posted",
    excerpt:
      "I've been using kushal travels cabs for pune to mumbai airport regularly...quick response and professional drivers",
  },
  {
    name: "Saudagar Bhosale",
    age: "Recently posted",
    excerpt:
      "Best taxi service to pune to Mumbai Airport pick up drop service...with clean and neat cab with professional drivers..",
  },
  {
    name: "Sopan Bansode",
    age: "Recently posted",
    excerpt:
      "It was the great experience with somnath ...he was very polite and helpful",
  },
  {
    name: "Abhishek DUDHBHATE",
    age: "Customer review",
    excerpt:
      "Very professional and reliable service provided by kushal travels....that the driver was very helpful to us..",
  },
  {
    name: "Pankaj Gawade",
    age: "Customer review",
    excerpt:
      "Very nice service...on time pickup with cooperative driver",
  },
];

function GoogleWordmark() {
  return (
    <span className="google-wordmark" aria-label="Google">
      <span className="google-blue">G</span><span className="google-red">o</span><span className="google-yellow">o</span><span className="google-blue">g</span><span className="google-green">l</span><span className="google-red">e</span>
    </span>
  );
}

export default function GoogleReviews({ sectionId = "google-reviews" }: { sectionId?: string }) {
  return (
    <section className="google-reviews-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="google-reviews-container">
        <div className="google-reviews-heading">
          <span className="home-eyebrow">CUSTOMER FEEDBACK</span>
          <h2 id={`${sectionId}-title`}>What Customers Say <em>About Us</em></h2>
          <p>Feedback shared by customers on the Google Business Profile.</p>
          <a className="google-review-profile-link" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
            View all Google reviews <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="google-review-summary">
          <strong className="google-review-excellent">CUSTOMER REVIEWS</strong>
          <div className="google-review-summary-stars" aria-label="Google profile rating: 4.7 out of 5">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} size={29} fill="currentColor" aria-hidden="true" />)}
          </div>
          <p><strong>4.7/5</strong> · Based on <strong>23 reviews</strong> shown on the supplied Google profile</p>
          <GoogleWordmark />
        </div>

        <div className="google-review-track-window" aria-label="Selected Google customer reviews">
          <div className="google-review-track">
            {reviews.map((review) => (
              <article className="google-review-card" key={review.name}>
                <div className="google-review-card-top">
                  <span className="google-review-avatar" aria-hidden="true">{review.name.charAt(0).toUpperCase()}</span>
                  <span className="google-review-author"><strong>{review.name}</strong><small>{review.age}</small></span>
                  <span className="google-review-google-mark" aria-hidden="true"><GoogleWordmark /></span>
                </div>
                <p className="google-review-quote">“{review.excerpt}”</p>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="google-review-read-more">
                  View on Google <ExternalLink size={13} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
        <p className="google-review-source-note">Selected excerpts are shown here for convenience. Visit Google to read the full reviews and current profile details.</p>
      </div>
    </section>
  );
}
