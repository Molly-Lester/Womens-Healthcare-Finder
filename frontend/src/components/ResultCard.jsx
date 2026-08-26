import { Text } from "@mantine/core";
import classes from "./ResultCard.module.css";

const categoryLabels = {
    "1": "Fertility Support",
    "2": "Menopause Support",
    "3": "Sexual Health",
    "4": "Contraception",
    "5": "Pregnancy and Maternity",
    "6": "Women's General Health",
};

const getFundingBadge = (providerType) => {
    return providerType === "NHS Service" ? "NHS" : "Private";
};

export default function ResultCard({ provider, onViewDetails }) {
    return (
        <div className={classes.clinicCard}>
            {/* Card Header */}
            <div className={classes.cardHeader}>
                <div className={classes.cardInfo}>
                    <Text className={classes.clinicName}>
                        {provider.provider_name}
                    </Text>
                    <div className={classes.badges}>
                        <span className={classes.badge}>
                            {provider.service_name}
                        </span>
                        <span className={classes.badge}>
                            {getFundingBadge(provider.provider_type)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Info Boxes */}
            <div className={classes.infoBoxes}>
                <div className={classes.infoBox}>
                    <Text className={classes.infoLabel}>Distance</Text>
                    <Text className={classes.infoValue}>
                        {provider.distance != null && !isNaN(Number(provider.distance))
                            ? `${Number(provider.distance).toFixed(1)} miles`
                            : "N/A"}
                    </Text>
                </div>
                <div className={classes.infoBox}>
                    <Text className={classes.infoLabel}>NHS Wait</Text>
                    <Text className={classes.infoValue}>6-8 wks</Text>
                </div>
            </div>

            {/* Contact Info */}
            <div className={classes.contactInfo}>
                <Text className={classes.contactText}>
                    {provider.address_line}, {provider.city}, {provider.postcode}
                </Text>
                {provider.phone_number && (
                    <Text className={classes.contactText}>
                        {provider.phone_number}
                    </Text>
                )}
            </div>

            {/* Footer */}
            <div className={classes.cardFooter}>
                <Text className={classes.rating}>
                    ★ 4.8 (89 reviews)
                </Text>
                <button className={classes.viewDetailsButton} onClick={onViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    );
}
