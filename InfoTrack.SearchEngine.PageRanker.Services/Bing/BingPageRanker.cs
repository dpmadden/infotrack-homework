using System.Text.RegularExpressions;

namespace InfoTrack.SearchEngine.PageRanker.Services.Bing
{
    /// <summary>
    /// Remember Bing?! No... neither... here's an implementation of the page
    /// ranker though. Enjoy!
    /// </summary>
    public class BingPageRanker : PageRanker
    {
        public override string Name => "Bing";
        protected override string SearchUrl => "https://infotrack-tests.infotrack.com.au/Bing/Page{0}.html?q={1}";
        protected override Regex LinkRegex => new Regex("<li class=\"b_algo\".+?\\<a href=\"([^\"]+)", RegexOptions.Compiled | RegexOptions.CultureInvariant);
    }
}