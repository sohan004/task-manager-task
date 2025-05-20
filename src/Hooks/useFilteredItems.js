import React, { useEffect, useState } from "react";

const useFilteredItems = (items, statusKey, searchKey) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (searchKey || statusKey) {
      const filterItem = items.filter((item) => {
        const isMatch = item.title
          .toLowerCase()
          .includes(searchKey.toLowerCase());
        const isStatusMatch =
          statusKey === "all" ||
          (statusKey === "completed" && item.completed) ||
          (statusKey === "pending" && !item.completed);
        return isMatch && isStatusMatch;
      });
      setFilteredItems(filterItem);
    } else {
      setFilteredItems(items);
    }
  }, [items, statusKey, searchKey]);

  return filteredItems;
};

export default useFilteredItems;
