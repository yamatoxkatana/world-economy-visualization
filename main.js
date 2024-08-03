document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "World Economy": {
            "Economic Systems": ["Capitalism", "Socialism", "Mixed Economy", "Communism"],
            "Major Economies": ["United States", "China", "European Union", "Japan", "India"],
            "Economic Indicators": ["GDP (Gross Domestic Product)", "Inflation Rate", "Unemployment Rate", "Trade Balance", "Currency Exchange Rates"],
            "Global Trade": {
                "International Trade Organizations": ["WTO", "IMF", "World Bank"],
                "Trade Agreements": ["NAFTA", "EU", "TPP"],
                "Import/Export Dynamics": [],
                "Tariffs and Duties": []
            },
            "Financial Markets": ["Stock Markets", "Bond Markets", "Forex Markets", "Commodity Markets"],
            "Economic Policies": ["Fiscal Policy", "Monetary Policy", "Trade Policy", "Regulatory Policy"],
            "Current Issues and Trends": ["Globalization", "Technology and Automation", "Climate Change and Economy", "Income Inequality", "Pandemic Impact"],
            "Sectors of Economy": {
                "Primary Sector": ["Agriculture", "Mining"],
                "Secondary Sector": ["Manufacturing", "Construction"],
                "Tertiary Sector": ["Services", "Retail"],
                "Quaternary Sector": ["Information", "Research"]
            }
        }
    };

    function createNode(name, children) {
        const node = document.createElement("div");
        node.className = "node";
        node.textContent = name;

        if (children && children.length > 0) {
            const childrenContainer = document.createElement("div");
            childrenContainer.className = "children";
            children.forEach(child => childrenContainer.appendChild(createNode(child.name, child.children)));
            node.appendChild(childrenContainer);
        }

        return node;
    }

    function dataToNodes(data) {
        return Object.keys(data).map(key => ({
            name: key,
            children: Array.isArray(data[key])
                ? data[key].map(item => ({ name: item, children: [] }))
                : dataToNodes(data[key])
        }));
    }

    const treeContainer = document.getElementById("tree");
    const nodes = dataToNodes(data);

    nodes.forEach(node => {
        const tree = createNode(node.name, node.children);
        treeContainer.appendChild(tree);
    });
});
