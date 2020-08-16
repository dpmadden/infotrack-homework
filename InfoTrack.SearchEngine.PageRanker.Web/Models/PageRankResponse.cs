using System;

namespace InfoTrack.SearchEngine.PageRanker.Web.Models
{
    public class PageRankResponse
    {
        public PageRankResponse(string searchTerm, string url, SearchEnginePageRank[] results)
        {
            SearchTerm = searchTerm;
            Uri = url;
            Results = results;
        }

        public string SearchTerm { get; }
        public string Uri { get; }

        public SearchEnginePageRank[] Results { get; }
    }
}