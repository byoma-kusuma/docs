import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const config = new pulumi.Config();
const stack = pulumi.getStack();

const resourceGroup = new azure_native.resources.ResourceGroup(
  `bk-portal-docs-${stack}`,
  {
    location: "eastus2",
  }
);

const isProd = (): boolean => {
  return stack === "prod";
};

const staticSite = new azure_native.web.StaticSite("staticSite", {
  branch: isProd() ? "main" : stack,
  location: resourceGroup.location,
  name: `${stack}-ui`,
  repositoryUrl: "https://github.com/byoma-kusuma/docs",
  repositoryToken: config.require("gh_token"),
  resourceGroupName: resourceGroup.name,
  sku: {
    name: "Free",
    tier: "Free",
  },
  buildProperties: {
    appArtifactLocation: "build",
    appLocation: "/",
    appBuildCommand: "npm run build",
    apiLocation: "",
    // set the following to false to skip github workflow setup
    skipGithubActionWorkflowGeneration: false,
  },
});

// this will fail the first time as the dns record needs to be added with your provider
// add a cname with pointing your desired domain name to the outputted url
// then run pulumi up again
new azure_native.web.StaticSiteCustomDomain(
  `bkportaldocs${stack}customdomain`,
  {
    domainName: isProd()
      ? "docs.byomakusuma.com"
      : `${stack}.docs.byomakusuma.com`,
    name: staticSite.name,
    resourceGroupName: resourceGroup.name,
  }
);

export const url = staticSite.defaultHostname;
