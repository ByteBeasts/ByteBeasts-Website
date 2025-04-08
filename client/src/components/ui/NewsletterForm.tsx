import { Button } from "./Button";

const NewsletterForm = () => {
  return (
    <form className="space-y-4 font-montserrat">
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Button variant="gradient" className="w-full">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
