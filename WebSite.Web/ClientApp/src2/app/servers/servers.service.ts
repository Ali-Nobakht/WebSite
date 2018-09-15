export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'سرور داخلی روکسو',
      status: 'روشن'
    },
    {
      id: 2,
      name: 'سرور فروشگاه اینترنتی آفر',
      status: 'خاموش'
    },
    {
      id: 3,
      name: 'سرور توسعه روکسو',
      status: 'خاموش'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
