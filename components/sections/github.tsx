import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">My contributions on GitHub</h2>
      <div className="mt-2 border p-2 rounded-md shadow-sm">
        <GitHubCalendar username="angelstchavez" colorScheme="light" />
      </div>
    </div>
  );
};

export default Github;
