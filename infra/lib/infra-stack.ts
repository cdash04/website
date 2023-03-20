import { App, Stack, StackProps } from 'aws-cdk-lib';
import { StaticWebsiteStack } from './static-website-stack';

export class InfraStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new StaticWebsiteStack(this, 'StaticWebsite', {
      domainName: this.node.tryGetContext('domain'),
      siteSubDomain: this.node.tryGetContext('subdomain'),
    });
  }
}
