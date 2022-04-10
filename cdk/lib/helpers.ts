import { randomBytes } from "crypto";
import { Construct } from "constructs";
import { ENVIRONMENT } from "./EnvVars";

export const random = () => {
  return randomBytes(2).toString("hex");
};

export const getProjectName = (scope: Construct): string => {
  return scope.node.tryGetContext("projectName") ?? "cladea.io";
};

export const getBranchName = (scope: Construct): string => {
  return scope.node.tryGetContext("branchName") ?? "";
};

export const getEnvironment = (scope: Construct): ENVIRONMENT => {
  return scope.node.tryGetContext("environment") ?? "prod";
};
