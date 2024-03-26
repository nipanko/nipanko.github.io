+++
title = 'Introduction to Cryptography🔑'
date = 2024-03-24
draft = false
url = '/blogs/introduction-to-cryptography'
tags = "cryptography"
toc = true

+++


>"Cryptography is the practice and study of techniques for secure communication in the presence of third parties called adversaries."

OR

>"Cryptography is the practice of developing and using coded algorithms to protect and obscure transmitted information so that it may only be read by those with the permission and ability to decrypt it. Put differently, cryptography obscures communications so that unauthorized parties are unable to access them." -IBM

Cryptography, originating from the Greek word "<span style="color:#ffc000">kryptos</span>" meaning hidden, embodies the art of concealing digital communications. It encompasses various mediums such as text, images, video, or audio. Primarily, cryptography serves to convert messages into an unintelligible format known as ciphertext. This ciphertext can only be deciphered back into its original readable form, known as plaintext, by authorized recipients possessing a specific secret key.
#### Study of Cryptology

Cryptology, which encompasses both cryptography and cryptanalysis, is deeply rooted in computer science and advanced mathematics.

![cryptography](/images/cryptography.svg)

### What is the relationship between Cryptography and Security

Relationship between cryptography and security is that cryptography is a subfield or part of Security. Security is a vast field and there are many aspects of security we need to take care of cryptography is just one of them which deals with encryption and decryption of data, making it an important part of security.

## Core Principles of Cryptography

Cryptography at its core is 
- Secure key establishment
- Secure communication 

The core principles of modern cryptography have evolved over time, yet they remain grounded in four fundamental concepts.

1. **Confidentiality:** Encrypted data is accessible exclusively to its intended recipient, ensuring that unauthorized parties cannot decipher its contents.
    
2. **Integrity:** Encrypted data remains unaltered during storage or transmission, as any unauthorized modifications are readily detectable by the recipient.
    
3. **Non-repudiation:** The sender of encrypted information cannot deny their involvement or intention to transmit the data, providing assurance of accountability.
    
4. **Authentication:** The identities of both the sender and receiver are verified, along with the origin and destination of the encrypted information, ensuring the integrity of the communication process.


## Common uses for cryptography

1. **Passwords:** Cryptography plays a pivotal role in safeguarding user passwords across various digital platforms. Passwords are often hashed using cryptographic algorithms before storage, ensuring that even if the stored data is compromised, the original passwords remain protected. Additionally, cryptographic techniques such as salting are employed to enhance the security of password storage, mitigating the risk of common attacks such as rainbow table attacks.
    
2. **Cryptocurrency:** Cryptocurrencies like Bitcoin and Ethereum rely heavily on cryptographic principles to ensure the security and integrity of transactions. Blockchain technology, the underlying foundation of cryptocurrencies, employs cryptographic techniques such as hash functions and digital signatures to secure transaction data, validate the authenticity of transactions, and prevent double-spending.
    
3. **Electronic Signatures:** In the digital realm, electronic signatures are used to authenticate the identity of signers and validate the integrity of electronic documents or messages. Cryptographic digital signatures utilize asymmetric encryption algorithms to sign documents, ensuring that the signer cannot repudiate their actions and providing assurance of the document's authenticity and integrity.
    
4. **Authentication:** Cryptography is extensively used in authentication mechanisms to verify the identity of users and entities. Techniques such as digital certificates, challenge-response protocols, and biometric authentication rely on cryptographic algorithms to securely authenticate users and authorize access to sensitive resources. By leveraging cryptographic techniques, authentication systems can thwart unauthorized access attempts and uphold the confidentiality and integrity of data.
    
5. **Secure Communications:** Cryptography forms the backbone of secure communication protocols such as SSL/TLS (Secure Socket Layer/Transport Layer Security), which are used to establish encrypted connections between parties over insecure networks such as the internet. These protocols employ cryptographic algorithms to encrypt data in transit, protecting it from interception and unauthorized access by adversaries. Secure communication protocols ensure the confidentiality, integrity, and authenticity of data exchanged between communicating parties, fostering trust in digital interactions.


