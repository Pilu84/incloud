// To allow importing less files to access class names
declare module '*.less' {
    const content: {[key: string]: string};
    export default content;
}

// To allow importing svg files to access their file path
declare module '*.svg' {
    const url: string;
    export default url;
}

// To allow importing mp3 files to access their file path
declare module '*.mp3' {
    const url: string;
    export default url;
}

// To allow importing json files directly
declare module '*.json' {
    const data: any;
    export default data;
}
declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
      constructor();
    }
   export default WebpackWorker;
}

// Type Baumdarstellung
declare module 'deni-react-treeview';

// Type CKEditor
declare module '@ckeditor/ckeditor5-react';
declare module '@ckeditor/ckeditor5-build-classic'

// Type Flowchart
declare module 'react-simple-flowchart'

// Type React Map Gl
declare module 'react-map-gl';
declare module 'react-map-gl-geocoder';

// to create inline HTMl
declare module 'react-html-parser' {
    import { ReactElement } from 'react';

    export default function ReactHtmlParser(
        html: string,
        options?: {
            decodeEntities?: boolean;
            transform?: (
                node: {
                    type: string;
                    name: string;
                    children: any[];
                    next: any;
                    prev: any;
                    parent: any;
                    data: string;
                },
                index: number
            ) => ReactElement<any> | undefined | null;
            preprocessNodes?: (nodes: any) => any;
        }
    ): ReactElement<any>;
}
