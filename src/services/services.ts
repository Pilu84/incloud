export class Services {

    public setData(name: string, data: any, cb: (result: any) => void) {
        fetch('http://localhost:8001/' + name, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
        })
            .then(res  => res.json())
            .then(result => {
                cb(result);
            });
    }
}
