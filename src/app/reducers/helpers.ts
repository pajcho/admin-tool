export function addOrUpdate(state: Partial<{ data: { id: string }[] }>, newItem: Partial<{ id?: string }>): any {
  // If we don't have an ID we won't do any changes in the state
  if (!newItem.id) return state.data;

  if (state.data.some((item) => item.id === newItem.id)) {
    // Update existing item
    return [
      ...state.data.map((item) => {
        if (item.id === newItem.id) {
          item = { ...item, ...newItem };
        }

        return item;
      }),
    ];
  }

  // Add new item
  return [...state.data, newItem];
}
