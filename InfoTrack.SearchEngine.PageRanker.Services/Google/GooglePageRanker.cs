using System;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace InfoTrack.SearchEngine.PageRanker.Services.Google
{
    public class GooglePageRanker : IPageRanker
    {
        private const string SearchUrl = "https://infotrack-tests.infotrack.com.au/Google/Page{0}.html";

        private static readonly HttpClient HttpClient = new HttpClient();
        private static readonly Regex LinkRegex = new Regex("div class=\"g\".+?\\<a href=\"([^\"]+)\".+?>([^<]+)", RegexOptions.Compiled | RegexOptions.CultureInvariant);

        public string Name => "Google";

        public async Task<int?> GetPageRank(string[] keywords, Uri siteUri)
        {
            var currentUrlIndex = 0;
            for (var i = 1; i <= 5; i++)
            {
                var response = await HttpClient.GetAsync(string.Format(SearchUrl, i.ToString("00")));
                var responseContent = await response.Content.ReadAsStringAsync();

                var matches = LinkRegex.Matches(responseContent);

                for (var x = 0; x < matches.Count; x++)
                {
                    Match match = matches[x];
                    
                    if (match.Groups[1].Value == siteUri.ToString())
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