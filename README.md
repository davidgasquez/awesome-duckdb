# Awesome DuckDB [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> A curated list of awesome DuckDB libraries, tools and resources.

[DuckDB](https://duckdb.org/) is an in-process SQL OLAP database management system.

<!-- omit in toc -->
## Contents

- [Resources](#resources)
- [Client APIs](#client-apis)
- [Tools Powered by DuckDB](#tools-powered-by-duckdb)
- [Libraries Powered by DuckDB](#libraries-powered-by-duckdb)
- [SQL Clients and IDE that Support DuckDB](#sql-clients-and-ide-that-support-duckdb)
- [Projects Powered by DuckDB](#projects-powered-by-duckdb)
- [Integrations](#integrations)
- [Extensions](#extensions)
- [Media](#media)
  - [Talks](#talks)
  - [Podcasts](#podcasts)
  - [Blog Posts](#blog-posts)
- [Contribute](#contribute)

## Resources

- [Official Documentation](https://duckdb.org/docs/) - Official DuckDB documentation.
  - [Official Blog](https://duckdb.org/news/) - Official DuckDB blog.
  - [DuckDB Clients](https://duckdb.org/docs/api/overview) - Client APIs for DuckDB.
  - [DuckDB Documentation PDF](https://duckdb.org/duckdb-docs.pdf) - The DuckDB documentation as a single PDF file.
- [docker-duckdb](https://github.com/davidgasquez/docker-duckdb) - Docker image for DuckDB CLI.
- [DuckDB setup](https://github.com/marketplace/actions/duckdb-setup) - GitHub Action to install DuckDB in CI.
- [Online DuckDB Shell](https://shell.duckdb.org/) - Online DuckDB shell powered by WebAssembly.
- [Serverless DuckDB over S3](https://github.com/BauplanLabs/quack-reduce/) - Running DuckDB over a data lake on S3 using lambda.
- [DuckDB snippets](https://duckdbsnippets.com/) - Collection of snippets curated by MotherDuck.

## Client APIs

- [C](https://duckdb.org/docs/api/c/overview)
- [C++](https://duckdb.org/docs/api/cpp)
- [CLI](https://duckdb.org/docs/api/cli)
- [Go](https://github.com/marcboeker/go-duckdb)
- [Julia](https://duckdb.org/docs/api/julia)
- [Node.js](https://duckdb.org/docs/api/nodejs/overview)
- [Python](https://duckdb.org/docs/api/python/overview)
- [R](https://duckdb.org/docs/api/r)
- [Rust](https://duckdb.org/docs/api/rust)
- [Swift](https://duckdb.org/docs/api/swift)
- [Wasm](https://duckdb.org/docs/api/wasm/overview)
- [ADBC](https://duckdb.org/docs/api/adbc)
- [ODBC](https://duckdb.org/docs/api/odbc/overview)

## Tools Powered by DuckDB

- [Rill Developer](https://github.com/rilldata/rill-developer) - Tool for effortlessly transforming data sets into powerful, opinionated dashboards using SQL.
- [Ibis Project](https://ibis-project.org/) - The flexibility of Python analytics with the scale and performance of modern SQL.
- [MotherDuck](https://motherduck.com/) - Supercharge DuckDB experience with the cloud.
- [Boiling Data](https://boilingdata.com/) - Serverless data analytics overlay on top of S3 Data Lakes.
- [Hex Dataframe SQL](https://learn.hex.tech/docs/logic-cell-types/sql-cells/overview) - Hex's Dataframe SQL cells are powered by DuckDB.
- [Mode](https://mode.com/blog/how-we-switched-in-memory-data-engine-to-duck-db-to-boost-visual-data-exploration-speed/) - Mode uses DuckDB for their in-memory data engine.
- [VulcanSQL](https://vulcansql.com/) - DuckDB can be used as a caching layer or a data connector in VulcanSQL, a Data API framework for data folks to create REST APIs by writing SQL templates.
- [Tad](https://www.tadviewer.com) - A fast, free, cross-platform tabular data viewer application powered by DuckDB.
- [Honeycomb Maps](https://docs.honeycomb.place/) - A browser-based geospatial analysis tool leveraging DuckDB Wasm.
- [Bauplan](https://www.bauplanlabs.com/) - A serverless data transformation platform for data lakes.
- [Excalichart.com](http://www.excalichart.com/) - A fast, free dashboard for exploring your data.
- [Malloy](https://www.malloydata.dev/) - Malloy is an experimental language for describing data relationships and transformations. Malloy connects to BigQuery and Postgres, and natively supports DuckDB.

## Libraries Powered by DuckDB

- [Mosaic](https://uwdata.github.io/mosaic/) - An extensible framework for linking databases and interactive views.
- [Fugue](https://github.com/fugue-project/fugue/) - A unified interface for distributed computing. Fugue executes SQL, Python, Pandas, and Polars code on Spark, Dask and Ray without any rewrites.
- [Splink](http://github.com/moj-analytical-services/splink) - A free Python library for fast, accurate data deduplication and record linkage.

## SQL Clients and IDE that Support DuckDB

- [Harlequin](https://harlequin.sh) - The DuckDB IDE for your terminal. ([GitHub](https://github.com/tconbeer/harlequin)).
- [qStudio](https://www.timestored.com/qstudio/) - A free SQL tool specialized for data analysts. It runs on every operating system and allows easy browsing of tables and charting of results.
- [DuckDB SQL Tools](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.duckdb-sql-tools) - Free DuckDB SQL Tools for VS Code IDE. [Premium version available](https://github.com/RandomFractals/pro-data-tools/blob/main/duckdb-tools.md#duckdb-pro-tools) with advanced features.

## Projects Powered by DuckDB

- [NBA Monte Carlo](https://github.com/matsonj/nba-monte-carlo) - Monte Carlo simulation of the NBA season, leveraging Meltano, dbt, DuckDB and Evidence.
- [Datadex](https://github.com/davidgasquez/datadex/) - Open source and local friendly data platform to collaborate on Open Data using DuckDB, Dagster, dbt, and Quarto.

## Integrations

- [dbt-duckdb](https://github.com/jwills/dbt-duckdb) - DuckDB dbt adapter.
- [data load tool - DuckDB destination](https://dlthub.com/docs/dlt-ecosystem/destinations/duckdb) - Extract and load data from APIs to DuckDB using dlt.
- [target-duckdb](https://hub.meltano.com/loaders/target-duckdb/) - Load data to DuckDB based on Singer spec.
- [Airbyte DuckDB destination](https://docs.airbyte.com/integrations/destinations/duckdb/) - Load data to DuckDB with Airbyte.
- [Kestra DuckDB plugin](https://kestra.io/plugins/plugin-jdbc-duckdb) — Run queries with DuckDB to schedule data transformations and process automations, and run event-driven anomaly detection pipelines.
- [Arrow Flight SQL Server](https://github.com/voltrondata/flight-sql-server-example) - An example implementation of the [Arrow Flight SQL protocol](https://arrow.apache.org/docs/format/FlightSql.html) what runs in a client-server setup with DuckDB or SQLite as backends.

## Extensions

- [Official Extensions](https://duckdb.org/docs/extensions/overview.html) - Official DuckDB extensions.
  - [`arrow`](https://github.com/duckdblabs/arrow) - A zero-copy data integration between Apache Arrow and DuckDB.
  - [`duckdb_iceberg`](https://github.com/duckdblabs/duckdb_iceberg) - DuckDB extension for reading Iceberg tables.
  - [`duckdb_aws`](https://github.com/duckdblabs/duckdb_aws) - DuckDB extension for handling AWS credentials.
  - [`duckdb_azure`](https://github.com/duckdblabs/duckdb_azure) - DuckDB extension for using the Azure Blob storage.
  - [`postgres_scanner`](https://duckdb.org/docs/extensions/postgres_scanner) – Allows DuckDB to directly read data from a running Postgres instance.
  - [`spatial`](https://duckdb.org/docs/extensions/spatial) - Enables geospatial processing.
  - [`sqlite_scanner`](https://duckdb.org/docs/extensions/sqlite_scanner) – To read and write to SQLite databases.
- [Deltatable](https://github.com/Mause/duckdb-deltatable-extension) - DuckDB extension for reading Delta tables.
- [Lance](https://github.com/eto-ai/lance/tree/main/integration/duckdb_lance) - Integrate Lance (modern columnar data format for ML implemented in Rust) with DuckDB.
- [PRQL](https://github.com/ywelsch/duckdb-prql) - Run PRQL commands directly within DuckDB.
- [duckdb-engine](https://github.com/Mause/duckdb_engine) - SQLAlchemy driver for DuckDB.
- [Scrooge-McDuck](https://github.com/pdet/Scrooge-McDuck) - DuckDB extension to support a set of aggregation functions and data scanners on financial data.
- [duckdb-pytables](https://github.com/MarkRoddy/duckdb-pytables) - DuckDB extension to allow running SQL on arbitrary data sources.
- [ODBC Scanner DuckDB Extension](https://github.com/rupurt/odbc-scanner-duckdb-extension) - DuckDB extension to read data directly from databases supporting the ODBC interface.
- [duckdb-jfr-extension](https://github.com/ocadaruma/duckdb-jfr-extension) - DuckDB extension to read JFR (Java Flight Recorder) files directly.

## Media

### Talks

- [DuckDB: The Power of a Data Warehouse in your Python Process @ PyData Yerevan](https://www.youtube.com/watch?v=q_SKaOeRiOI) – Gábor Szárnyas.
- [DuckDB: Bringing analytical SQL directly to your Python shell @ EuroPython](https://www.youtube.com/watch?v=egN4TwVyJss) - Pedro Holanda.
- [DuckDB keynote @ Data + AI Summit 2023](https://www.youtube.com/watch?v=GaHWuQ_cBhA) - Hannes Mühleisen.
- [DuckCon #3 playlist](https://www.youtube.com/playlist?list=PLzIMXBizEZjhy6QG4Eqoe9k9NgBa-w67Y)
- [DuckDB: Bringing Analytical SQL Directly To Your Python Shell @ FOSDEM](https://www.youtube.com/watch?v=-rCZQHXSunc&ab_channel=DuckDBLabs) - Pedro Holanda.
- [State Of The Duck @ DuckCon](https://www.youtube.com/watch?v=rdnPkLSkoyU&ab_channel=DuckDBLabs) - Hannes Mühleisen & Mark Raasveldt.
- [DuckDB Extensions @ DuckCon](https://www.youtube.com/watch?v=UKo_LQyLTko&ab_channel=DuckDBLabs) - Pedro Holanda & Sam Ansmink.
- [Developing Systems in Academia: The Good, the Bad, and the not-so-Ugly Duckling @ CIDR](https://www.youtube.com/watch?v=dv4A2LIFG80&ab_channel=CIDRDB) - Hannes Mühleisen.
- [DuckDB An Embeddable Analytical Database @ FOSDEM](https://www.youtube.com/watch?v=nPDomZQ8jI4&ab_channel=FOSDEM) - Hannes Mühleisen.
- [DuckDB tutorials playlist by Learn Data with Mark](https://www.youtube.com/watch?v=fZj6kTwXN1U&list=PLw2SS5iImhEThtiGNPiNenOr2tVvLj6H7) - Mark Needham

### Podcasts

- [Software Engineering Daily: DuckDB](https://softwareengineeringdaily.com/2022/03/18/duckdb-with-hannes-muleisen/) - Hannes Mühleisen.
- [Move Your Database To The Data And Speed Up Your Analytics With DuckDB](https://www.dataengineeringpodcast.com/duckdb-in-process-olap-database-episode-270/) - Hannes Mühleisen.
- [The Personal Data Warehouse](https://podcasts.apple.com/gb/podcast/the-personal-data-warehouse-w-jordan-tigani-of-motherduck/id1574755368?i=1000568408959) - Jordan Tigani.

### Blog Posts

- [Modern Data Stack in a Box](https://duckdb.org/2022/10/12/modern-data-stack-in-a-box.html) -  Fast, free, and open-source Modern Data Stack deployed on a laptop using the combination of DuckDB, Meltano, dbt, and Apache Superset.
- [How to use DuckDB, Motherduck and Kestra for ETL](https://motherduck.com/blog/motherduck-kestra-etl-pipelines/) - how DuckDB can transform data, mask sensitive PII information, detect anomalies in event-driven workflows, and streamline reporting use cases. 
- [DuckDB vs. MotherDuck — how do they compare](https://kestra.io/blogs/2023-07-28-duckdb-vs-motherduck) - what are key differences between them, and when to choose each of these options.

## Contribute

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
