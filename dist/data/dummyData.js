export const dummyData = {
    nodes: [
        { data: { id: '1', label: 'Person', name: 'Alice' } },
        { data: { id: '2', label: 'Person', name: 'Bob' } },
        { data: { id: '3', label: 'Organization', name: 'OpenAI' } },
    ],
    edges: [
        { data: { source: '1', target: '3', label: 'works_for' } },
        { data: { source: '2', target: '3', label: 'collaborates_with' } },
    ],
};
