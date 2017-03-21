begin
CREATE (:`User` {`name`:"Mat"});
CREATE (:`Term` {`name`:"team direction"});
CREATE (:`Topic`:`Alignment` {`name`:"Core Values", `briefexpl`:"A brief explanation of the topic and what to do...", `rate`:85});
CREATE (:`Topic`:`Grouping` {`name`:"Formal Leadership", `rate`:65});
CREATE (:`Topic`:`Alignment` {`name`:"Group Symbol", `rate`:75});
CREATE (:`Topic`:`Alignment` {`name`:"Group Name", `rate`:76});
CREATE (:`Activity`:`Tool` {`name`:"Kudo Cards", `rate`:84});
CREATE (:`Activity`:`Tool` {`name`:"Slogan", `rate`:74});
CREATE (:`Activity`:`Tool` {`name`:"Culture Books", `rate`:71});
CREATE (:`Activity`:`Exercise` {`name`:"Inkigai", `rate`:53});
CREATE (:`UNIQUE IMPORT LABEL` {`name`:"Smiles", `account`:15, `UNIQUE IMPORT ID`:10});
CREATE (:`Resource`:`Book` {`name`:"Words to Live by: 5", `likes`:6, `link`:"https://amazon.com"});
CREATE (:`Resource`:`Blog` {`name`:"How to live with...", `likes`:-3, `link`:"http..."});
commit
begin
CREATE CONSTRAINT ON (node:`Term`) ASSERT node.`name` IS UNIQUE;
CREATE CONSTRAINT ON (node:`Activity`) ASSERT node.`name` IS UNIQUE;
CREATE CONSTRAINT ON (node:`User`) ASSERT node.`name` IS UNIQUE;
CREATE CONSTRAINT ON (node:`Topic`) ASSERT node.`name` IS UNIQUE;
CREATE CONSTRAINT ON (node:`Resource`) ASSERT node.`name` IS UNIQUE;
CREATE CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT node.`UNIQUE IMPORT ID` IS UNIQUE;
commit
schema await
begin
MATCH (n1:`User`{`name`:"Mat"}), (n2:`Term`{`name`:"team direction"}) CREATE (n1)-[:`ASKS`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Topic`{`name`:"Core Values"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Topic`{`name`:"Formal Leadership"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Topic`{`name`:"Group Symbol"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Topic`{`name`:"Group Name"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Activity`{`name`:"Kudo Cards"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Activity`{`name`:"Slogan"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Activity`{`name`:"Culture Books"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`Term`{`name`:"team direction"}), (n2:`Activity`{`name`:"Inkigai"}) CREATE (n1)-[:`RELATE_TO`]->(n2);
MATCH (n1:`User`{`name`:"Mat"}), (n2:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`:10}) CREATE (n1)-[:`HAS`]->(n2);
MATCH (n1:`User`{`name`:"Mat"}), (n2:`Topic`{`name`:"Core Values"}) CREATE (n1)-[:`STUDIES` {`stage`:"learn"}]->(n2);
MATCH (n1:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`:10}), (n2:`Topic`{`name`:"Core Values"}) CREATE (n1)-[:`ACCOUNT` {`account`:10}]->(n2);
MATCH (n1:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`:10}), (n2:`Topic`{`name`:"Core Values"}) CREATE (n1)-[:`EARNED` {`count`:5, `reason`:"start"}]->(n2);
MATCH (n1:`Topic`{`name`:"Core Values"}), (n2:`Resource`{`name`:"Words to Live by: 5"}) CREATE (n1)-[:`HAS`]->(n2);
MATCH (n1:`Topic`{`name`:"Core Values"}), (n2:`Resource`{`name`:"How to live with..."}) CREATE (n1)-[:`HAS`]->(n2);
MATCH (n1:`User`{`name`:"Mat"}), (n2:`Resource`{`name`:"Words to Live by: 5"}) CREATE (n1)-[:`LEARNS`]->(n2);
MATCH (n1:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`:10}), (n2:`Resource`{`name`:"Words to Live by: 5"}) CREATE (n1)-[:`EARNED` {`count`:5, `reason`:"learn"}]->(n2);
MATCH (n1:`User`{`name`:"Mat"}), (n2:`Resource`{`name`:"Words to Live by: 5"}) CREATE (n1)-[:`LIKE` {`rate`:1}]->(n2);
commit
begin
MATCH (n:`UNIQUE IMPORT LABEL`)  WITH n LIMIT 1000 REMOVE n:`UNIQUE IMPORT LABEL` REMOVE n.`UNIQUE IMPORT ID`;
commit
begin
DROP CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT node.`UNIQUE IMPORT ID` IS UNIQUE;
commit
