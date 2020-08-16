using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace InfoTrack.SearchEngine.PageRanker.Services
{
    public abstract class PageRanker : IPageRanker
    {
        public abstract string Name { get; }

        protected static HttpClient HttpClient = new HttpClient();

        protected abstract string SearchUrl { get; }
        protected abstract Regex LinkRegex { get; }

        public async Task<int?> GetPageRank(string searchTerm, string siteUri)
        {
            var currentUrlIndex = 0;
            for (var i = 1; i <= 5; i++)
            {
                var response = await HttpClient.GetAsync(string.Format(SearchUrl, i.ToString("00"), System.Net.WebUtility.UrlEncode(searchTerm)));
                var responseContent = await response.Content.ReadAsStringAsync();

                var matches = LinkRegex.Matches(responseContent);

                for (var x = 0; x < matches.Count; x++)
                {
                    var match = matches[x];

                    if (match.Groups[1].Value == siteUri)
                    {
                        return currentUrlIndex + 1;
                    }

                    currentUrlIndex++;
                }
            }

            return null;
        }
    }
}