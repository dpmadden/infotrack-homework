namespace InfoTrack.SearchEngine.PageRanker.Web.Models
{
    public class SearchEnginePageRank
    {
        public SearchEnginePageRank(string searchEngineName, int? pageRank)
        {
            SearchEngineName = searchEngineName;
            PageRank = pageRank;
        }

        public string SearchEngineName { get; }
        public int? PageRank { get; }
        public bool UrlFound => PageRank.HasValue;
    }
}