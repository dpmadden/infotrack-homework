namespace InfoTrack.SearchEngine.PageRanker.Web.Models
{
    public class PageRankRequest
    {
        public string[] Keywords { get; set; } = new string[0];
        public string Url { get; set; }
    }
}