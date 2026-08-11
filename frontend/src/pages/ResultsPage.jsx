import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearResults, resetFilters, setFilters, setSearchQuery, setLoading } from "../features/search/searchSlice";
import FilterSidebar from "../components/FilterSidebar";
import ResultCard from "../components/ResultCard";
import Results from "../components/Results";
import { showNotification } from '@mantine/notifications';
import classes from "./ResultsPage.module.css";

export default function ResultsPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchData = useSelector((state) => state.search.results);
    const filters = useSelector((state) => state.search.filters);
    const searchQuery = useSelector((state) => state.search.searchQuery);

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    const handleNewSearch = () => {
        dispatch(clearResults());
        dispatch(setSearchQuery({
            postcode: "",
            category: null,
            providerType: "all",
            distance: "5",
        }));
        navigate("/");
    };

    const handleApplyFilters = async () => {
        const { postcode, category, providerType } = searchQuery;
        const currentDistance = filters.distance;

        if (!postcode || !category) {
            showNotification({
                title: "Missing information",
                message: "Please perform a search first before applying filters.",
                color: "orange",
            });
            return;
        }

        const params = new URLSearchParams({
            postcode,
            radius: currentDistance,
            service_id: category,
            provider_type: providerType,
        });

        dispatch(setLoading(true));

        try {
            const response = await fetch(
                `http://localhost:3000/providers/nearby?${params.toString()}`
            );

            const data = await response.json();

            if (!response.ok) {
                showNotification({
                    title: "Search error",
                    message: data.error || "Something went wrong",
                    color: "red",
                });
                return;
            }

            dispatch(setResults(data));
            dispatch(setSearchQuery({ distance: currentDistance }));
        } catch (err) {
            showNotification({
                title: "Network error",
                message: "We're having trouble connecting to the server. Please check your connection and try again.",
                color: "red",
            });
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className={classes.container}>
            <Results
                searchQuery={searchQuery}
                hasResults={searchData.length > 0}
                onNewSearch={handleNewSearch}
            />

            {/* Main Content */}
            {searchData.length > 0 && (
                <div className={classes.resultsLayout}>
                    {/* Filter Sidebar */}
                    <FilterSidebar
                        distance={filters.distance}
                        setDistance={(value) => dispatch(setFilters({ distance: value }))}
                        onReset={handleResetFilters}
                        onApplyFilters={handleApplyFilters}
                    />

                    {/* Results List */}
                    <div className={classes.resultsList}>
                        {searchData.map((provider) => (
                            <ResultCard
                                key={provider.provider_id}
                                provider={provider}
                                onViewDetails={() => console.log("View details for", provider.provider_id)}
                            />
                        ))}

                        {/* New Search Button — below all result cards */}
                        <div className={classes.newSearchContainer}>
                            <button className={classes.newSearchButton} onClick={handleNewSearch}>
                                New Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
