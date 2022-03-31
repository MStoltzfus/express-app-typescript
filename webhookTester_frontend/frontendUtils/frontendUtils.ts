const Utils = {
    foo() {
      console.log ('bar');
    },
    bas() {
        console.log('bas');
    },
    isPstn(props: any) {

        let data = JSON.stringify(props);
    
        if (data.includes("RemotePartyNumber")) {
            return true;
        } else {
            return false;
        }
    }
  };


  export default Utils;