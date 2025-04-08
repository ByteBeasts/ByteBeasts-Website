import { Button } from "./Button";

const NewsletterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#FFF6F0]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
