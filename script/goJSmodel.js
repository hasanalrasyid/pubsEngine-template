var myDiagram =
  $(go.Diagram, "myDiagramDiv",
    { // automatically scale the diagram to fit the viewport's size
      initialAutoScale: go.Diagram.Uniform,
      // disable user copying of parts
      allowCopy: false,
      // position all of the nodes and route all of the links
      layout: $(go.LayeredDigraphLayout,
        {
          direction: 90,
          layerSpacing: 10,
          columnSpacing: 15,
          setsPortSpots: false
        })
    });
function convertKeyImage(key) {
  if (!key) key = "NE";
  return "Figure/logo/" + key + "_logo-75x50.png";
}
// replace the default Node template in the nodeTemplateMap
myDiagram.nodeTemplate =
  $(go.Node, "Vertical",  // the whole node panel
    $(go.TextBlock,  // the text label
      new go.Binding("text", "key")),
    $(go.Picture,  // the icon showing the logo
      // You should set the desiredSize (or width and height)
      // whenever you know what size the Picture should be.
      { desiredSize: new go.Size(75, 50) },
      new go.Binding("source", "key", convertKeyImage))
  );
// replace the default Link template in the linkTemplateMap
myDiagram.linkTemplate =
  $(go.Link,  // the whole link panel
    { curve: go.Link.Bezier, toShortLength: 2 },
    $(go.Shape,  // the link shape
      { strokeWidth: 1.5 }),
    $(go.Shape,  // the arrowhead
      { toArrow: "Standard", stroke: null })
  );

// the array of link data objects: the relationships between the nodes
var linkDataArray = [
  { from: "CAR", to: "ARI" },
  { from: "ARI", to: "CIN" },
  { from: "ARI", to: "GB" },
  { from: "DEN", to: "GB" },
  { from: "DEN", to: "CIN" },
  { from: "DEN", to: "NE" },
  { from: "GB", to: "WAS" },
  { from: "WAS", to: "STL" },
  { from: "CIN", to: "STL" },
  { from: "STL", to: "SEA" },
  { from: "SEA", to: "SF" },
  { from: "SEA", to: "MIN" },
  { from: "NE", to: "NYG" },
  { from: "NE", to: "KC" },
  { from: "MIN", to: "DET" },
  { from: "MIN", to: "KC" },
  { from: "KC", to: "HOU" },
  { from: "KC", to: "BUF" },
  { from: "KC", to: "BAL" },
  { from: "KC", to: "OAK" },
  { from: "BUF", to: "NYJ" },
  { from: "BAL", to: "PIT" },
  { from: "DET", to: "NO" },
  { from: "DET", to: "PHI" },
  { from: "DET", to: "CHI" },
  { from: "HOU", to: "JAC" },
  { from: "HOU", to: "TEN" },
  { from: "PIT", to: "IND" },
  { from: "PIT", to: "SD" },
  { from: "OAK", to: "NYJ" },
  { from: "OAK", to: "SD" },
  { from: "NO", to: "ATL" },
  { from: "NO", to: "NYG" },
  { from: "PHI", to: "NYG" },
  { from: "CHI", to: "TB" },
  { from: "NYJ", to: "IND" },
  { from: "NYJ", to: "CLE" },
  { from: "IND", to: "TB" },
  { from: "TB", to: "ATL" },
  { from: "SD", to: "CLE" },
  { from: "ATL", to: "DAL" },
  { from: "ATL", to: "JAC" },
  { from: "CLE", to: "TEN" },
  { from: "DAL", to: "MIA" },
  { from: "MIA", to: "TEN" }
];

// create the model and assign it to the Diagram
myDiagram.model =
  new go.GraphLinksModel(
    { // automatically create node data objects
      // for each "from" or "to" reference
      // (set this property before setting the linkDataArray)
      archetypeNodeData: {},
      // process all of the link relationship data
      linkDataArray: linkDataArray
    });

