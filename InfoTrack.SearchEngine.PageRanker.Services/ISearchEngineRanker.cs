using System.Threading.Tasks;

using InfoTrack.SearchEngine.PageRanker.Services.Domain;

namespace InfoTrack.SearchEngine.PageRanker.Services
{
    public interface ISearchEngineRanker
    {
        Task<SearchEnginePageRank[]> GetPageRanks(string searchTerm, string siteUri);
    }
}