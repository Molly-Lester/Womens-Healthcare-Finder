import { Text } from "@mantine/core";
import classes from "./Results.module.css";

const categoryLabels = {
    "1": "Fertility Support",
    "2": "Menopause Support",
    "3": "Sexual Health",
    "4": "Contraception",
    "5": "Pregnancy and Maternity",
    "6": "Women's General Health",
};

const distanceLabels = {
    "5": "5 miles",
    "10": "10 miles",
    "25": "25 miles",
    "50": "50 miles",
    "all": "Anywhere in the UK",
};

export default function Results({ searchQuery, hasResults, onNewSearch }) {
    return (
        <>
            {/* Search Summary */}
            <div className={classes.searchSummary}>
                <div className={classes.summaryRow}>
                    <Text className={classes.summaryLabel}>Postcode:</Text>
                    <Text className={classes.summaryValue}>{searchQuery.postcode}</Text>
                </div>
                <div className={classes.summaryRow}>
                    <Text className={classes.summaryLabel}>Category:</Text>
                    <Text className={classes.summaryValue}>
                        {searchQuery.category ? categoryLabels[searchQuery.category] : "All categories"}
                    </Text>
                </div>
                <div className={classes.summaryRow}>
                    <Text className={classes.summaryLabel}>Distance:</Text>
                    <Text className={classes.summaryValue}>
                        {distanceLabels[searchQuery.distance] || searchQuery.distance}
                    </Text>
                </div>
                {searchQuery.providerType !== "all" && (
                    <div className={classes.summaryRow}>
                        <Text className={classes.summaryLabel}>Provider:</Text>
                        <Text className={classes.summaryValue}>{searchQuery.providerType}</Text>
                    </div>
                )}
            </div>

            {/* Empty State */}
            {hasResults === false && (
                <div className={classes.empty}>
                    <Text>We couldn't find any providers matching your search.</Text>
                    <Text>Try adjusting your filters or searching for something else.</Text>
                </div>
            )}

            {/* New Search Button */}
            <div className={classes.newSearchContainer}>
                <button className={classes.newSearchButton} onClick={onNewSearch}>
                    New Search
                </button>
            </div>
        </>
    );
}
