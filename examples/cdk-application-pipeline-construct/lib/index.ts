import { Construct } from 'constructs';
import { App, Tags } from 'aws-cdk-lib';
import { DeploymentStack } from '../../../../aws-deployment-pipeline-reference-architecture/examples/cdk-application-pipeline/infrastructure/src/deployment';

export interface CdkApplicationPipelineConstructProps {
  appName: string,
  app: App,
  
}

export class CdkApplicationPipelineConstruct extends Construct {

  constructor(scope: Construct, id: string, props: CdkApplicationPipelineConstructProps) {
    super(scope, id);

    const environmentName = props.app.node.tryGetContext('environmentName');
    const solutionCode = props.app.node.tryGetContext('solutionCode');
    const stackName = environmentName ? `${environmentName}-${props.appName}` : props.appName;
    
  }
}
