using System.Text.RegularExpressions;

namespace InfoTrack.SearchEngine.PageRanker.Services.Google
{
    public class GooglePageRanker : PageRanker
    {
        public override string Name => "Google";
        protected override string SearchUrl => "https://infotrack-tests.infotrack.com.au/Google/Page{0}.html?q={1}";
        protected override Regex LinkRegex => new Regex("div class=\"g\".+?\\<a href=\"([^\"]+)\".+?>([^<]+)", RegexOptions.Compiled | RegexOptions.CultureInvariant);
    }
}