import SearchBox from "../components/search-box";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-56 mb-8"
        />
        {/* Search Bar */}

        <div className="w-full max-w-xl">
          <SearchBox></SearchBox>
        </div>
      </div>
    </main>
  );
}
