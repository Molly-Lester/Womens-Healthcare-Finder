import { Select, Text, Checkbox, Divider, Button } from "@mantine/core";
import classes from "./FilterSidebar.module.css";

export default function FilterSidebar({
  distance,
  setDistance,
  onReset,
  onApplyFilters,
}) {
  return (
    <aside className={classes.sidebar}>
      <Text size="sm" fw={500} className={classes.title}>
        Filters
      </Text>
      <Divider className={classes.divider} />

      {/* Distance */}
      <div className={classes.filterGroup}>
        <Text size="xs" c="dimmed" mb="xs">
          Distance
        </Text>
        <Select
          value={distance}
          onChange={setDistance}
          placeholder="Dropdown"
          data={[
            { value: "5", label: "5 miles" },
            { value: "10", label: "10 miles" },
            { value: "25", label: "25 miles" },
            { value: "50", label: "50 miles" },
            { value: "all", label: "Anywhere in the UK" },
          ]}
          classNames={{
            input: classes.selectInput,
            option: classes.option,
          }}
          withCheckIcon={false}
        />
      </div>

      <Divider className={classes.divider} />

      {/* Apply Filters Button */}
      <Button
        fullWidth
        className={classes.applyButton}
        onClick={onApplyFilters}
      >
        Apply Filters
      </Button>

      {/* Reset Button */}
      <Button
        variant="outline"
        fullWidth
        className={classes.resetButton}
        onClick={onReset}
      >
        Reset Filters
      </Button>
    </aside>
  );
}
