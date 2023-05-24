# Generate a Trusted SSL Certificate

This folder contains a script that will generate a trusted SSL certificate for local software development.

## Configuration

You can adjust the `[dn]` part of the [openssl-localhost.cnf](openssl-localhost.cnf) file to whatever you prefer.

## Generate new certificate each year

From the current folder, run the following command to generate a new certificate:

`$ zsh generate.zsh`

This script will generate new `server.crt` and `server.key` files in the current folder.

## SSL Certificates

SSL key and certificate to use for serving HTTPS:

- server.key (private key)
- server.crt (root certificate)

## Setup trusted SSL certificate in local

The browser doesn't trust our certificate by default, since we generate certificate manually. We have to make sure the browser trusts our certificate, so we need to install it on our local machine.

### Chrome insecure localhost flag

Please ensure that you have **disabled** the following experimental flag in Chrome: **Allow invalid certificates for resources loaded from localhost.**

URL: [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost)

If you're using any other browser, please double-check similar settings.

Important to say that [Chrome had deprecated support for commonName matching in certificates](https://groups.google.com/a/chromium.org/g/security-dev/c/IGT2fLJrAeo), in effect, requiring a `subjectAltName` since January 2017. You can found more details.

### macOS (Catalina)

1. Double click on the certificate [server.crt](ssl/server.crt)
2. Select your desired keychain (login should suffice)
3. Add the certificate
4. Open **Keychain Access** if it isn't already open
5. Select the keychain you chose earlier
6. You should see the certificate **localhost** in the list
7. Double click on the certificate
8. Expand **Trust**
9. Select the option **Always Trust** in _When using this certificate_
10. Close the certificate window

### Windows (Windows 10)

1. Double click on the certificate [server.crt](ssl/server.crt)
2. Click on the button **Install Certificate ...**
3. Please select whether you want to store it on user level or machine level
4. Click **Next**
5. Select **Place all certificates in the following store**
6. Click **Browse**
7. Select **Trusted Root Certification Authorities**
8. Click **Ok**
9. Click **Next**
10. Click **Finish**
11. If you get a prompt, click **Yes**

### Linux (Ubuntu, Debian, OpenSUSE, SLES)

1. Copy [server.crt](ssl/server.crt) to dir `/usr/local/share/ca-certificates/`
2. Use command: `sudo cp ssl/server.crt /usr/local/share/ca-certificates/localhost.crt`
3. Update the CA store: `sudo update-ca-certificates`

After these steps, the new CA is known by system utilities like curl and get (you can confirm this step with the command: `curl https://localhost:4201`). Unfortunately, this does not affect most web browsers like Google Chrome or Mozilla Firefox in the Linux environment.

### Linux (Fedora, RHEL, CentOS)

1. Convert [server.crt](ssl/server.crt) to `localhost.pem`
2. Use command: `openssl x509 -in server.crt -out localhost.pem`
3. Copy `localhost.pem` to dir `/etc/pki/ca-trust/source/anchors/`
4. Use command: `sudo cp localhost.pem /etc/pki/ca-trust/source/anchors/`
5. Update the CA store: `sudo update-ca-trust`

After these steps, the new CA is known by system utilities like curl and get (you can confirm this step with the command: `curl https://localhost:4201`). Unfortunately, this does not affect most web browsers like Google Chrome or Mozilla Firefox in the Linux environment.

### Google Chrome Manage Certificates

Depending on the operating system, Chrome uses the system-wide certificates (macOS, Windows) or certificates of its own scope (Linux).

In case it uses its own certificates, you can add a root certificate to Chrome by executing the following steps.

In Chrome settings (chrome://settings)[chrome://settings], search for _certificates_ and click on **Manage Certificates**.

Here you can import the localhost.pem file at the Trusted Root Certification Authorities tab.

Under the **Authorities** tab, click **Import** to start the certificate installation process.

### Testing and confirmation of setup

After these steps, the localhost certificate is known by the system. And you should be able to run project from local with HTTPS.

### Troubleshooting

If you still see **Your connection is not private** message in Chrome (or a similar statement in other browsers), please double-check your local documentation how you can install and trust [server.crt](ssl/server.crt) self-signed certificate in your specific system (the system that is not listed above).
