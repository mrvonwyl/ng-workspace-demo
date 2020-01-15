# Instructions

## In Terminal

`ng new ng-workspace-demo --create-application=false`

`code ng-workspace-demo`

## In VS Code Terminal 1

create .prettierrc with content:

```
{
  "singleQuote": true
}
```

`ng g application app --routing=true --style=scss`

test with
`npm start`

`ng g library hello`

change name in library package.json
`"name": "@mrvonwyl/hello"`

change paths in root tsconfig.json

```
"paths": {
  "@mrvonwyl/hello": ["dist/hello"],
  "@mrvonwyl/hello/*": ["dist/hello/*"]
}
```

add build:watch script in root package.json
`"build:watch": "ng build hello --watch"`

test with
`npm run build:watch`

## In VS Code Terminal 2

`ng g service hello-world --project=hello`

implement hello function in hello service

```
hello(): string {
  return 'Hello World!';
}
```

add hello service to public-api.ts
`export * from './lib/hello-world.service';`

add HelloModule to app.module.ts in app with the following import statement:
`import { HelloModule } from '@mrvonwyl/hello';`

change app.component.ts in app

```
import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '@mrvonwyl/hello';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private helloWorldService: HelloWorldService) {}
  ngOnInit() {
    this.title = this.helloWorldService.hello();
  }
}
```

remove unecessary stuff in app.component.html

`ng serve demo`

# Caveats

that changes in the library are reflected you need to save twice. this is because the build of the app is triggered simultaneously and therefore uses the build results of the last build (not the current one).

make sure that you always set your import statements to @mrvonwyl/hello (or whatever the name of your library is) instead of directly referencing to the file with the source code. furthermore the autoimport feature in VS Code adds public-api at the end. this part has to be removed.
