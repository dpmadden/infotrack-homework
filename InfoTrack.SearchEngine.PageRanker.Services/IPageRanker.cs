using System;
using System.Threading.Tasks;

namespace InfoTrack.SearchEngine.PageRanker.Services
{
    public interface IPageRanker
    {
        string Name { get; }
        Task<int?> GetPageRank(string[] keywords, Uri siteUri);
    }
}
