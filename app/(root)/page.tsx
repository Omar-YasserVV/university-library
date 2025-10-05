import BookList from "@/components/Home/BookList";
import BookOverview from "@/components/Home/BookOverview";
import { sampleBooks } from "@/constants";

console.log(sampleBooks);

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
