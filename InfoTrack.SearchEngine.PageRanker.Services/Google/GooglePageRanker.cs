using System;
using System.Threading.Tasks;

namespace InfoTrack.SearchEngine.PageRanker.Services.Google
{
    public class GooglePageRanker : IPageRanker
    {
        public string Name => "Google";

        public Task<int?> GetPageRank(string[] keywords, Uri siteUri)
        {
            throw new NotImplementedException();
        }
    }
}