function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirefc40"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirefc40"] = parcelRequire;
}
parcelRequire.register("dWyTn", function(module, exports) {

$parcel$export(module.exports, "register", () => $a26bc200a9b6ac27$export$6503ec6e8aabbaf, (v) => $a26bc200a9b6ac27$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $a26bc200a9b6ac27$export$f7ad0328861e2f03, (v) => $a26bc200a9b6ac27$export$f7ad0328861e2f03 = v);
var $a26bc200a9b6ac27$export$6503ec6e8aabbaf;
var $a26bc200a9b6ac27$export$f7ad0328861e2f03;
"use strict";
var $a26bc200a9b6ac27$var$mapping = {};
function $a26bc200a9b6ac27$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$a26bc200a9b6ac27$var$mapping[keys[i]] = pairs[keys[i]];
}
function $a26bc200a9b6ac27$var$resolve(id) {
    var resolved = $a26bc200a9b6ac27$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$a26bc200a9b6ac27$export$6503ec6e8aabbaf = $a26bc200a9b6ac27$var$register;
$a26bc200a9b6ac27$export$f7ad0328861e2f03 = $a26bc200a9b6ac27$var$resolve;

});

parcelRequire.register("3qHnr", function(module, exports) {
"use strict";
module.exports.__esModule = true;
module.exports.default = function() {};
module.exports = module.exports["default"];

});

parcelRequire.register("edHs5", function(module, exports) {

$parcel$export(module.exports, "SourceMapGenerator", () => $a5a3fc3fd48cfc06$export$4d99f7c30e854ff, (v) => $a5a3fc3fd48cfc06$export$4d99f7c30e854ff = v);
$parcel$export(module.exports, "SourceMapConsumer", () => $a5a3fc3fd48cfc06$export$194e92554d04abdd, (v) => $a5a3fc3fd48cfc06$export$194e92554d04abdd = v);
$parcel$export(module.exports, "SourceNode", () => $a5a3fc3fd48cfc06$export$7e987e8f375d24c2, (v) => $a5a3fc3fd48cfc06$export$7e987e8f375d24c2 = v);
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var $a5a3fc3fd48cfc06$export$4d99f7c30e854ff;
var $a5a3fc3fd48cfc06$export$194e92554d04abdd;
var $a5a3fc3fd48cfc06$export$7e987e8f375d24c2;

$a5a3fc3fd48cfc06$export$4d99f7c30e854ff = (parcelRequire("juFmR")).SourceMapGenerator;

$a5a3fc3fd48cfc06$export$194e92554d04abdd = (parcelRequire("bTG7i")).SourceMapConsumer;

$a5a3fc3fd48cfc06$export$7e987e8f375d24c2 = (parcelRequire("eQWsr")).SourceNode;

});
parcelRequire.register("juFmR", function(module, exports) {

$parcel$export(module.exports, "SourceMapGenerator", () => $e310e870ef6d7fbd$export$4d99f7c30e854ff, (v) => $e310e870ef6d7fbd$export$4d99f7c30e854ff = v);
var $e310e870ef6d7fbd$export$4d99f7c30e854ff;

var $8KEmK = parcelRequire("8KEmK");

var $gLxrf = parcelRequire("gLxrf");

var $2VL9K = parcelRequire("2VL9K");
var $e310e870ef6d7fbd$require$ArraySet = $2VL9K.ArraySet;

var $aPSRG = parcelRequire("aPSRG");
var $e310e870ef6d7fbd$require$MappingList = $aPSRG.MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function $e310e870ef6d7fbd$var$SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = $gLxrf.getArg(aArgs, "file", null);
    this._sourceRoot = $gLxrf.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = $gLxrf.getArg(aArgs, "skipValidation", false);
    this._sources = new $e310e870ef6d7fbd$require$ArraySet();
    this._names = new $e310e870ef6d7fbd$require$ArraySet();
    this._mappings = new $e310e870ef6d7fbd$require$MappingList();
    this._sourcesContents = null;
}
$e310e870ef6d7fbd$var$SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new $e310e870ef6d7fbd$var$SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = $gLxrf.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = $gLxrf.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = $gLxrf.getArg(aArgs, "generated");
    var original = $gLxrf.getArg(aArgs, "original", null);
    var source = $gLxrf.getArg(aArgs, "source", null);
    var name = $gLxrf.getArg(aArgs, "name", null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = $gLxrf.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[$gLxrf.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[$gLxrf.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile = $gLxrf.relative(sourceRoot, sourceFile);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new $e310e870ef6d7fbd$require$ArraySet();
    var newNames = new $e310e870ef6d7fbd$require$ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = $gLxrf.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = $gLxrf.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = $gLxrf.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = $gLxrf.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ";";
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!$gLxrf.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ",";
        }
        next += $8KEmK.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += $8KEmK.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += $8KEmK.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += $8KEmK.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += $8KEmK.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
$e310e870ef6d7fbd$var$SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = $gLxrf.relative(aSourceRoot, source);
        var key = $gLxrf.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ $e310e870ef6d7fbd$var$SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
$e310e870ef6d7fbd$export$4d99f7c30e854ff = $e310e870ef6d7fbd$var$SourceMapGenerator;

});
parcelRequire.register("8KEmK", function(module, exports) {

$parcel$export(module.exports, "encode", () => $65f1ee6ad1c49fd1$export$c564cdbbe6da493, (v) => $65f1ee6ad1c49fd1$export$c564cdbbe6da493 = v);
$parcel$export(module.exports, "decode", () => $65f1ee6ad1c49fd1$export$2f872c0f2117be69, (v) => $65f1ee6ad1c49fd1$export$2f872c0f2117be69 = v);
/**
 * Returns the base 64 VLQ encoded value.
 */ var $65f1ee6ad1c49fd1$export$c564cdbbe6da493;
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ var $65f1ee6ad1c49fd1$export$2f872c0f2117be69;

var $6hMth = parcelRequire("6hMth");
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var $65f1ee6ad1c49fd1$var$VLQ_BASE_SHIFT = 5;
// binary: 100000
var $65f1ee6ad1c49fd1$var$VLQ_BASE = 1 << $65f1ee6ad1c49fd1$var$VLQ_BASE_SHIFT;
// binary: 011111
var $65f1ee6ad1c49fd1$var$VLQ_BASE_MASK = $65f1ee6ad1c49fd1$var$VLQ_BASE - 1;
// binary: 100000
var $65f1ee6ad1c49fd1$var$VLQ_CONTINUATION_BIT = $65f1ee6ad1c49fd1$var$VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function $65f1ee6ad1c49fd1$var$toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function $65f1ee6ad1c49fd1$var$fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
$65f1ee6ad1c49fd1$export$c564cdbbe6da493 = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = $65f1ee6ad1c49fd1$var$toVLQSigned(aValue);
    do {
        digit = vlq & $65f1ee6ad1c49fd1$var$VLQ_BASE_MASK;
        vlq >>>= $65f1ee6ad1c49fd1$var$VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= $65f1ee6ad1c49fd1$var$VLQ_CONTINUATION_BIT;
        encoded += $6hMth.encode(digit);
    }while (vlq > 0);
    return encoded;
};
$65f1ee6ad1c49fd1$export$2f872c0f2117be69 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = $6hMth.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & $65f1ee6ad1c49fd1$var$VLQ_CONTINUATION_BIT);
        digit &= $65f1ee6ad1c49fd1$var$VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += $65f1ee6ad1c49fd1$var$VLQ_BASE_SHIFT;
    }while (continuation);
    aOutParam.value = $65f1ee6ad1c49fd1$var$fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

});
parcelRequire.register("6hMth", function(module, exports) {

$parcel$export(module.exports, "encode", () => $4939edfea76aa291$export$c564cdbbe6da493, (v) => $4939edfea76aa291$export$c564cdbbe6da493 = v);
$parcel$export(module.exports, "decode", () => $4939edfea76aa291$export$2f872c0f2117be69, (v) => $4939edfea76aa291$export$2f872c0f2117be69 = v);
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ var $4939edfea76aa291$export$c564cdbbe6da493;
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ var $4939edfea76aa291$export$2f872c0f2117be69;
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var $4939edfea76aa291$var$intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
$4939edfea76aa291$export$c564cdbbe6da493 = function(number) {
    if (0 <= number && number < $4939edfea76aa291$var$intToCharMap.length) return $4939edfea76aa291$var$intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
$4939edfea76aa291$export$2f872c0f2117be69 = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

});


parcelRequire.register("gLxrf", function(module, exports) {

$parcel$export(module.exports, "getArg", () => $c34af95140d9acc8$export$6e45e70adce70bb2, (v) => $c34af95140d9acc8$export$6e45e70adce70bb2 = v);
$parcel$export(module.exports, "urlParse", () => $c34af95140d9acc8$export$d6e833647f7f5f17, (v) => $c34af95140d9acc8$export$d6e833647f7f5f17 = v);
$parcel$export(module.exports, "isAbsolute", () => $c34af95140d9acc8$export$e434c7255acda994, (v) => $c34af95140d9acc8$export$e434c7255acda994 = v);
$parcel$export(module.exports, "normalize", () => $c34af95140d9acc8$export$a3295358bff77e, (v) => $c34af95140d9acc8$export$a3295358bff77e = v);
$parcel$export(module.exports, "join", () => $c34af95140d9acc8$export$f7e2c8231c57a8bd, (v) => $c34af95140d9acc8$export$f7e2c8231c57a8bd = v);
$parcel$export(module.exports, "relative", () => $c34af95140d9acc8$export$f0e7d1106eeabbe6, (v) => $c34af95140d9acc8$export$f0e7d1106eeabbe6 = v);
$parcel$export(module.exports, "toSetString", () => $c34af95140d9acc8$export$be0fa1163fa7a4c, (v) => $c34af95140d9acc8$export$be0fa1163fa7a4c = v);
$parcel$export(module.exports, "fromSetString", () => $c34af95140d9acc8$export$1fc47c3d4c3302a1, (v) => $c34af95140d9acc8$export$1fc47c3d4c3302a1 = v);
$parcel$export(module.exports, "compareByOriginalPositions", () => $c34af95140d9acc8$export$273077902de92ff2, (v) => $c34af95140d9acc8$export$273077902de92ff2 = v);
$parcel$export(module.exports, "compareByGeneratedPositionsDeflated", () => $c34af95140d9acc8$export$b7acf533941302f6, (v) => $c34af95140d9acc8$export$b7acf533941302f6 = v);
$parcel$export(module.exports, "compareByGeneratedPositionsInflated", () => $c34af95140d9acc8$export$f9c43907549d61f1, (v) => $c34af95140d9acc8$export$f9c43907549d61f1 = v);
$parcel$export(module.exports, "parseSourceMapInput", () => $c34af95140d9acc8$export$b49e2de2ad542732, (v) => $c34af95140d9acc8$export$b49e2de2ad542732 = v);
$parcel$export(module.exports, "computeSourceURL", () => $c34af95140d9acc8$export$659a1aa8f1cdc036, (v) => $c34af95140d9acc8$export$659a1aa8f1cdc036 = v);
var $c34af95140d9acc8$export$6e45e70adce70bb2;
var $c34af95140d9acc8$export$d6e833647f7f5f17;
var $c34af95140d9acc8$export$2ec9abc2d2cac192;
var $c34af95140d9acc8$export$a3295358bff77e;
var $c34af95140d9acc8$export$f7e2c8231c57a8bd;
var $c34af95140d9acc8$export$e434c7255acda994;
var $c34af95140d9acc8$export$f0e7d1106eeabbe6;
var $c34af95140d9acc8$export$be0fa1163fa7a4c;
var $c34af95140d9acc8$export$1fc47c3d4c3302a1;
var $c34af95140d9acc8$export$273077902de92ff2;
var $c34af95140d9acc8$export$b7acf533941302f6;
var $c34af95140d9acc8$export$f9c43907549d61f1;
var $c34af95140d9acc8$export$b49e2de2ad542732;
var $c34af95140d9acc8$export$659a1aa8f1cdc036;
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function $c34af95140d9acc8$var$getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
$c34af95140d9acc8$export$6e45e70adce70bb2 = $c34af95140d9acc8$var$getArg;
var $c34af95140d9acc8$var$urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var $c34af95140d9acc8$var$dataUrlRegexp = /^data:.+\,.+$/;
function $c34af95140d9acc8$var$urlParse(aUrl) {
    var match = aUrl.match($c34af95140d9acc8$var$urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
$c34af95140d9acc8$export$d6e833647f7f5f17 = $c34af95140d9acc8$var$urlParse;
function $c34af95140d9acc8$var$urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ":";
    url += "//";
    if (aParsedUrl.auth) url += aParsedUrl.auth + "@";
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
$c34af95140d9acc8$export$2ec9abc2d2cac192 = $c34af95140d9acc8$var$urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function $c34af95140d9acc8$var$normalize(aPath) {
    var path = aPath;
    var url = $c34af95140d9acc8$var$urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = $c34af95140d9acc8$export$e434c7255acda994(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === ".") parts.splice(i, 1);
        else if (part === "..") up++;
        else if (up > 0) {
            if (part === "") {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join("/");
    if (path === "") path = isAbsolute ? "/" : ".";
    if (url) {
        url.path = path;
        return $c34af95140d9acc8$var$urlGenerate(url);
    }
    return path;
}
$c34af95140d9acc8$export$a3295358bff77e = $c34af95140d9acc8$var$normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function $c34af95140d9acc8$var$join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = $c34af95140d9acc8$var$urlParse(aPath);
    var aRootUrl = $c34af95140d9acc8$var$urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || "/";
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return $c34af95140d9acc8$var$urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match($c34af95140d9acc8$var$dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return $c34af95140d9acc8$var$urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : $c34af95140d9acc8$var$normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return $c34af95140d9acc8$var$urlGenerate(aRootUrl);
    }
    return joined;
}
$c34af95140d9acc8$export$f7e2c8231c57a8bd = $c34af95140d9acc8$var$join;
$c34af95140d9acc8$export$e434c7255acda994 = function(aPath) {
    return aPath.charAt(0) === "/" || $c34af95140d9acc8$var$urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function $c34af95140d9acc8$var$relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, "");
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + "/") !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
$c34af95140d9acc8$export$f0e7d1106eeabbe6 = $c34af95140d9acc8$var$relative;
var $c34af95140d9acc8$var$supportsNullProto = function() {
    var obj = Object.create(null);
    return !("__proto__" in obj);
}();
function $c34af95140d9acc8$var$identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function $c34af95140d9acc8$var$toSetString(aStr) {
    if ($c34af95140d9acc8$var$isProtoString(aStr)) return "$" + aStr;
    return aStr;
}
$c34af95140d9acc8$export$be0fa1163fa7a4c = $c34af95140d9acc8$var$supportsNullProto ? $c34af95140d9acc8$var$identity : $c34af95140d9acc8$var$toSetString;
function $c34af95140d9acc8$var$fromSetString(aStr) {
    if ($c34af95140d9acc8$var$isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
$c34af95140d9acc8$export$1fc47c3d4c3302a1 = $c34af95140d9acc8$var$supportsNullProto ? $c34af95140d9acc8$var$identity : $c34af95140d9acc8$var$fromSetString;
function $c34af95140d9acc8$var$isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function $c34af95140d9acc8$var$compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = $c34af95140d9acc8$var$strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return $c34af95140d9acc8$var$strcmp(mappingA.name, mappingB.name);
}
$c34af95140d9acc8$export$273077902de92ff2 = $c34af95140d9acc8$var$compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function $c34af95140d9acc8$var$compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = $c34af95140d9acc8$var$strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return $c34af95140d9acc8$var$strcmp(mappingA.name, mappingB.name);
}
$c34af95140d9acc8$export$b7acf533941302f6 = $c34af95140d9acc8$var$compareByGeneratedPositionsDeflated;
function $c34af95140d9acc8$var$strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function $c34af95140d9acc8$var$compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = $c34af95140d9acc8$var$strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return $c34af95140d9acc8$var$strcmp(mappingA.name, mappingB.name);
}
$c34af95140d9acc8$export$f9c43907549d61f1 = $c34af95140d9acc8$var$compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function $c34af95140d9acc8$var$parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
}
$c34af95140d9acc8$export$b49e2de2ad542732 = $c34af95140d9acc8$var$parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function $c34af95140d9acc8$var$computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") sourceRoot += "/";
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = $c34af95140d9acc8$var$urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = $c34af95140d9acc8$var$join($c34af95140d9acc8$var$urlGenerate(parsed), sourceURL);
    }
    return $c34af95140d9acc8$var$normalize(sourceURL);
}
$c34af95140d9acc8$export$659a1aa8f1cdc036 = $c34af95140d9acc8$var$computeSourceURL;

});

parcelRequire.register("2VL9K", function(module, exports) {

$parcel$export(module.exports, "ArraySet", () => $22257bdf6de4a81e$export$605bbf5ea7b60ba3, (v) => $22257bdf6de4a81e$export$605bbf5ea7b60ba3 = v);
var $22257bdf6de4a81e$export$605bbf5ea7b60ba3;

var $gLxrf = parcelRequire("gLxrf");
var $22257bdf6de4a81e$var$has = Object.prototype.hasOwnProperty;
var $22257bdf6de4a81e$var$hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function $22257bdf6de4a81e$var$ArraySet() {
    this._array = [];
    this._set = $22257bdf6de4a81e$var$hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ $22257bdf6de4a81e$var$ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new $22257bdf6de4a81e$var$ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ $22257bdf6de4a81e$var$ArraySet.prototype.size = function ArraySet_size() {
    return $22257bdf6de4a81e$var$hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ $22257bdf6de4a81e$var$ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = $22257bdf6de4a81e$var$hasNativeMap ? aStr : $gLxrf.toSetString(aStr);
    var isDuplicate = $22257bdf6de4a81e$var$hasNativeMap ? this.has(aStr) : $22257bdf6de4a81e$var$has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if ($22257bdf6de4a81e$var$hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ $22257bdf6de4a81e$var$ArraySet.prototype.has = function ArraySet_has(aStr) {
    if ($22257bdf6de4a81e$var$hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = $gLxrf.toSetString(aStr);
        return $22257bdf6de4a81e$var$has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ $22257bdf6de4a81e$var$ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if ($22257bdf6de4a81e$var$hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = $gLxrf.toSetString(aStr);
        if ($22257bdf6de4a81e$var$has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ $22257bdf6de4a81e$var$ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error("No element indexed by " + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ $22257bdf6de4a81e$var$ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
$22257bdf6de4a81e$export$605bbf5ea7b60ba3 = $22257bdf6de4a81e$var$ArraySet;

});

parcelRequire.register("aPSRG", function(module, exports) {

$parcel$export(module.exports, "MappingList", () => $7e3939d729392f90$export$e82e0908843dd951, (v) => $7e3939d729392f90$export$e82e0908843dd951 = v);
var $7e3939d729392f90$export$e82e0908843dd951;

var $gLxrf = parcelRequire("gLxrf");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function $7e3939d729392f90$var$generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || $gLxrf.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function $7e3939d729392f90$var$MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ $7e3939d729392f90$var$MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ $7e3939d729392f90$var$MappingList.prototype.add = function MappingList_add(aMapping) {
    if ($7e3939d729392f90$var$generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ $7e3939d729392f90$var$MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort($gLxrf.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
$7e3939d729392f90$export$e82e0908843dd951 = $7e3939d729392f90$var$MappingList;

});


parcelRequire.register("bTG7i", function(module, exports) {

$parcel$export(module.exports, "SourceMapConsumer", () => $8a95803dd87a8ea3$export$194e92554d04abdd, (v) => $8a95803dd87a8ea3$export$194e92554d04abdd = v);
var $8a95803dd87a8ea3$export$194e92554d04abdd;
var $8a95803dd87a8ea3$export$bef6691594139a79;
var $8a95803dd87a8ea3$export$823525094e5b803c;

var $gLxrf = parcelRequire("gLxrf");

var $cogOb = parcelRequire("cogOb");

var $2VL9K = parcelRequire("2VL9K");
var $8a95803dd87a8ea3$require$ArraySet = $2VL9K.ArraySet;

var $8KEmK = parcelRequire("8KEmK");

var $9PGri = parcelRequire("9PGri");
var $8a95803dd87a8ea3$require$quickSort = $9PGri.quickSort;
function $8a95803dd87a8ea3$var$SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = $gLxrf.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new $8a95803dd87a8ea3$var$IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new $8a95803dd87a8ea3$var$BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
$8a95803dd87a8ea3$var$SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return $8a95803dd87a8ea3$var$BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ $8a95803dd87a8ea3$var$SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
$8a95803dd87a8ea3$var$SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty($8a95803dd87a8ea3$var$SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
$8a95803dd87a8ea3$var$SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty($8a95803dd87a8ea3$var$SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
$8a95803dd87a8ea3$var$SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ $8a95803dd87a8ea3$var$SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
$8a95803dd87a8ea3$var$SourceMapConsumer.GENERATED_ORDER = 1;
$8a95803dd87a8ea3$var$SourceMapConsumer.ORIGINAL_ORDER = 2;
$8a95803dd87a8ea3$var$SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
$8a95803dd87a8ea3$var$SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ $8a95803dd87a8ea3$var$SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || $8a95803dd87a8ea3$var$SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case $8a95803dd87a8ea3$var$SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case $8a95803dd87a8ea3$var$SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = $gLxrf.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ $8a95803dd87a8ea3$var$SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = $gLxrf.getArg(aArgs, "line");
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: $gLxrf.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: $gLxrf.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", $gLxrf.compareByOriginalPositions, $cogOb.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: $gLxrf.getArg(mapping, "generatedLine", null),
                    column: $gLxrf.getArg(mapping, "generatedColumn", null),
                    lastColumn: $gLxrf.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: $gLxrf.getArg(mapping, "generatedLine", null),
                    column: $gLxrf.getArg(mapping, "generatedColumn", null),
                    lastColumn: $gLxrf.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
$8a95803dd87a8ea3$export$194e92554d04abdd = $8a95803dd87a8ea3$var$SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function $8a95803dd87a8ea3$var$BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = $gLxrf.parseSourceMapInput(aSourceMap);
    var version = $gLxrf.getArg(sourceMap, "version");
    var sources = $gLxrf.getArg(sourceMap, "sources");
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = $gLxrf.getArg(sourceMap, "names", []);
    var sourceRoot = $gLxrf.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = $gLxrf.getArg(sourceMap, "sourcesContent", null);
    var mappings = $gLxrf.getArg(sourceMap, "mappings");
    var file = $gLxrf.getArg(sourceMap, "file", null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error("Unsupported version: " + version);
    if (sourceRoot) sourceRoot = $gLxrf.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map($gLxrf.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && $gLxrf.isAbsolute(sourceRoot) && $gLxrf.isAbsolute(source) ? $gLxrf.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = $8a95803dd87a8ea3$require$ArraySet.fromArray(names.map(String), true);
    this._sources = $8a95803dd87a8ea3$require$ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return $gLxrf.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
$8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype = Object.create($8a95803dd87a8ea3$var$SourceMapConsumer.prototype);
$8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.consumer = $8a95803dd87a8ea3$var$SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = $gLxrf.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create($8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype);
    var names = smc._names = $8a95803dd87a8ea3$require$ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = $8a95803dd87a8ea3$require$ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return $gLxrf.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new $8a95803dd87a8ea3$var$Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    $8a95803dd87a8ea3$require$quickSort(smc.__originalMappings, $gLxrf.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty($8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function $8a95803dd87a8ea3$var$Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") index++;
        else {
            mapping = new $8a95803dd87a8ea3$var$Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    $8KEmK.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error("Found a source, but no line and column");
                if (segment.length === 3) throw new Error("Found a source and line, but no column");
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") originalMappings.push(mapping);
        }
    }
    $8a95803dd87a8ea3$require$quickSort(generatedMappings, $gLxrf.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    $8a95803dd87a8ea3$require$quickSort(originalMappings, $gLxrf.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    return $cogOb.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: $gLxrf.getArg(aArgs, "line"),
        generatedColumn: $gLxrf.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", $gLxrf.compareByGeneratedPositionsDeflated, $gLxrf.getArg(aArgs, "bias", $8a95803dd87a8ea3$var$SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = $gLxrf.getArg(mapping, "source", null);
            if (source !== null) {
                source = this._sources.at(source);
                source = $gLxrf.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = $gLxrf.getArg(mapping, "name", null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: $gLxrf.getArg(mapping, "originalLine", null),
                column: $gLxrf.getArg(mapping, "originalColumn", null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = $gLxrf.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = $gLxrf.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ $8a95803dd87a8ea3$var$BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = $gLxrf.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: $gLxrf.getArg(aArgs, "line"),
        originalColumn: $gLxrf.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", $gLxrf.compareByOriginalPositions, $gLxrf.getArg(aArgs, "bias", $8a95803dd87a8ea3$var$SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: $gLxrf.getArg(mapping, "generatedLine", null),
            column: $gLxrf.getArg(mapping, "generatedColumn", null),
            lastColumn: $gLxrf.getArg(mapping, "lastGeneratedColumn", null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
$8a95803dd87a8ea3$export$bef6691594139a79 = $8a95803dd87a8ea3$var$BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function $8a95803dd87a8ea3$var$IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = $gLxrf.parseSourceMapInput(aSourceMap);
    var version = $gLxrf.getArg(sourceMap, "version");
    var sections = $gLxrf.getArg(sourceMap, "sections");
    if (version != this._version) throw new Error("Unsupported version: " + version);
    this._sources = new $8a95803dd87a8ea3$require$ArraySet();
    this._names = new $8a95803dd87a8ea3$require$ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error("Support for url field in sections not implemented.");
        var offset = $gLxrf.getArg(s, "offset");
        var offsetLine = $gLxrf.getArg(offset, "line");
        var offsetColumn = $gLxrf.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new $8a95803dd87a8ea3$var$SourceMapConsumer($gLxrf.getArg(s, "map"), aSourceMapURL)
        };
    });
}
$8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype = Object.create($8a95803dd87a8ea3$var$SourceMapConsumer.prototype);
$8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype.constructor = $8a95803dd87a8ea3$var$SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty($8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: $gLxrf.getArg(aArgs, "line"),
        generatedColumn: $gLxrf.getArg(aArgs, "column")
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = $cogOb.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex($gLxrf.getArg(aArgs, "source")) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ $8a95803dd87a8ea3$var$IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = $gLxrf.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") this.__originalMappings.push(adjustedMapping);
        }
    }
    $8a95803dd87a8ea3$require$quickSort(this.__generatedMappings, $gLxrf.compareByGeneratedPositionsDeflated);
    $8a95803dd87a8ea3$require$quickSort(this.__originalMappings, $gLxrf.compareByOriginalPositions);
};
$8a95803dd87a8ea3$export$823525094e5b803c = $8a95803dd87a8ea3$var$IndexedSourceMapConsumer;

});
parcelRequire.register("cogOb", function(module, exports) {

$parcel$export(module.exports, "GREATEST_LOWER_BOUND", () => $9054c3b7e13bbed1$export$4ecd616dce182dff, (v) => $9054c3b7e13bbed1$export$4ecd616dce182dff = v);
$parcel$export(module.exports, "LEAST_UPPER_BOUND", () => $9054c3b7e13bbed1$export$b99fbecff261243, (v) => $9054c3b7e13bbed1$export$b99fbecff261243 = v);
$parcel$export(module.exports, "search", () => $9054c3b7e13bbed1$export$d76128d007d19019, (v) => $9054c3b7e13bbed1$export$d76128d007d19019 = v);
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var $9054c3b7e13bbed1$export$4ecd616dce182dff;
var $9054c3b7e13bbed1$export$b99fbecff261243;
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ var $9054c3b7e13bbed1$export$d76128d007d19019;
$9054c3b7e13bbed1$export$4ecd616dce182dff = 1;
$9054c3b7e13bbed1$export$b99fbecff261243 = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function $9054c3b7e13bbed1$var$recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return $9054c3b7e13bbed1$var$recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == $9054c3b7e13bbed1$export$b99fbecff261243) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return $9054c3b7e13bbed1$var$recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == $9054c3b7e13bbed1$export$b99fbecff261243) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
$9054c3b7e13bbed1$export$d76128d007d19019 = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = $9054c3b7e13bbed1$var$recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || $9054c3b7e13bbed1$export$4ecd616dce182dff);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

});

parcelRequire.register("9PGri", function(module, exports) {

$parcel$export(module.exports, "quickSort", () => $7289cc074c6410ef$export$866270269b9544a5, (v) => $7289cc074c6410ef$export$866270269b9544a5 = v);
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ var $7289cc074c6410ef$export$866270269b9544a5;
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function $7289cc074c6410ef$var$swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function $7289cc074c6410ef$var$randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function $7289cc074c6410ef$var$doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = $7289cc074c6410ef$var$randomIntInRange(p, r);
        var i = p - 1;
        $7289cc074c6410ef$var$swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            $7289cc074c6410ef$var$swap(ary, i, j);
        }
        $7289cc074c6410ef$var$swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        $7289cc074c6410ef$var$doQuickSort(ary, comparator, p, q - 1);
        $7289cc074c6410ef$var$doQuickSort(ary, comparator, q + 1, r);
    }
}
$7289cc074c6410ef$export$866270269b9544a5 = function(ary, comparator) {
    $7289cc074c6410ef$var$doQuickSort(ary, comparator, 0, ary.length - 1);
};

});


parcelRequire.register("eQWsr", function(module, exports) {

$parcel$export(module.exports, "SourceNode", () => $ad03447fb2516eb2$export$7e987e8f375d24c2, (v) => $ad03447fb2516eb2$export$7e987e8f375d24c2 = v);
var $ad03447fb2516eb2$export$7e987e8f375d24c2;

var $juFmR = parcelRequire("juFmR");
var $ad03447fb2516eb2$require$SourceMapGenerator = $juFmR.SourceMapGenerator;

var $gLxrf = parcelRequire("gLxrf");
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var $ad03447fb2516eb2$var$REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var $ad03447fb2516eb2$var$NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var $ad03447fb2516eb2$var$isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function $ad03447fb2516eb2$var$SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[$ad03447fb2516eb2$var$isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ $ad03447fb2516eb2$var$SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new $ad03447fb2516eb2$var$SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split($ad03447fb2516eb2$var$REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = $gLxrf.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            var source = aRelativePath ? $gLxrf.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new $ad03447fb2516eb2$var$SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[$ad03447fb2516eb2$var$isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[$ad03447fb2516eb2$var$isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[$ad03447fb2516eb2$var$isSourceNode]) chunk.walk(aFn);
        else if (chunk !== "") aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[$ad03447fb2516eb2$var$isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === "string") this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push("".replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ $ad03447fb2516eb2$var$SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[$gLxrf.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][$ad03447fb2516eb2$var$isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn($gLxrf.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ $ad03447fb2516eb2$var$SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new $ad03447fb2516eb2$require$SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === $ad03447fb2516eb2$var$NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
$ad03447fb2516eb2$export$7e987e8f375d24c2 = $ad03447fb2516eb2$var$SourceNode;

});


parcelRequire.register("d3V3O", function(module, exports) {
"use strict";

});

var $60bd17184da31353$exports = {};

(parcelRequire("dWyTn")).register(JSON.parse('{"2bXA3":"index.80eca452.js","7v5Ne":"defaultAvatarBig.8103fa76.png","k6Tkz":"defaultAvatar.7103e1c8.png","67yDZ":"index.ae8ea4b4.css"}'));

var $827edd0b99d22e08$exports = {};
var $2090716501b0b8bd$exports = {};
"use strict";
$2090716501b0b8bd$exports.__esModule = true;
// istanbul ignore next
function $2090716501b0b8bd$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $a849cd18a2d2eff4$exports = {};
"use strict";
$a849cd18a2d2eff4$exports.__esModule = true;
// istanbul ignore next
function $a849cd18a2d2eff4$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function $a849cd18a2d2eff4$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var $78d876a9e9c4d43a$exports = {};

$parcel$export($78d876a9e9c4d43a$exports, "__esModule", () => $78d876a9e9c4d43a$export$1e511d4a378977f5, (v) => $78d876a9e9c4d43a$export$1e511d4a378977f5 = v);
$parcel$export($78d876a9e9c4d43a$exports, "HandlebarsEnvironment", () => $78d876a9e9c4d43a$export$5d1b9d3ad24c13f9, (v) => $78d876a9e9c4d43a$export$5d1b9d3ad24c13f9 = v);
$parcel$export($78d876a9e9c4d43a$exports, "VERSION", () => $78d876a9e9c4d43a$export$a4ad2735b021c132, (v) => $78d876a9e9c4d43a$export$a4ad2735b021c132 = v);
$parcel$export($78d876a9e9c4d43a$exports, "COMPILER_REVISION", () => $78d876a9e9c4d43a$export$682db5a6f2fa1046, (v) => $78d876a9e9c4d43a$export$682db5a6f2fa1046 = v);
$parcel$export($78d876a9e9c4d43a$exports, "LAST_COMPATIBLE_COMPILER_REVISION", () => $78d876a9e9c4d43a$export$b416520f9fd5c520, (v) => $78d876a9e9c4d43a$export$b416520f9fd5c520 = v);
$parcel$export($78d876a9e9c4d43a$exports, "REVISION_CHANGES", () => $78d876a9e9c4d43a$export$534648964353ca81, (v) => $78d876a9e9c4d43a$export$534648964353ca81 = v);
$parcel$export($78d876a9e9c4d43a$exports, "log", () => $78d876a9e9c4d43a$export$bef1f36f5486a6a3, (v) => $78d876a9e9c4d43a$export$bef1f36f5486a6a3 = v);
$parcel$export($78d876a9e9c4d43a$exports, "createFrame", () => $78d876a9e9c4d43a$export$52b3fe9f41f5650c, (v) => $78d876a9e9c4d43a$export$52b3fe9f41f5650c = v);
$parcel$export($78d876a9e9c4d43a$exports, "logger", () => $78d876a9e9c4d43a$export$af88d00dbe7f521, (v) => $78d876a9e9c4d43a$export$af88d00dbe7f521 = v);
var $78d876a9e9c4d43a$export$1e511d4a378977f5;
var $78d876a9e9c4d43a$export$5d1b9d3ad24c13f9;
var $78d876a9e9c4d43a$export$a4ad2735b021c132;
var $78d876a9e9c4d43a$export$682db5a6f2fa1046;
var $78d876a9e9c4d43a$export$b416520f9fd5c520;
var $78d876a9e9c4d43a$export$534648964353ca81;
var $78d876a9e9c4d43a$export$bef1f36f5486a6a3;
var $78d876a9e9c4d43a$export$52b3fe9f41f5650c;
var $78d876a9e9c4d43a$export$af88d00dbe7f521;
"use strict";
$78d876a9e9c4d43a$export$1e511d4a378977f5 = true;
$78d876a9e9c4d43a$export$5d1b9d3ad24c13f9 = $78d876a9e9c4d43a$var$HandlebarsEnvironment;
// istanbul ignore next
function $78d876a9e9c4d43a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $b8fa3a450c4ca764$exports = {};

$parcel$export($b8fa3a450c4ca764$exports, "__esModule", () => $b8fa3a450c4ca764$export$1e511d4a378977f5, (v) => $b8fa3a450c4ca764$export$1e511d4a378977f5 = v);
$parcel$export($b8fa3a450c4ca764$exports, "extend", () => $b8fa3a450c4ca764$export$8b58be045bf06082, (v) => $b8fa3a450c4ca764$export$8b58be045bf06082 = v);
$parcel$export($b8fa3a450c4ca764$exports, "indexOf", () => $b8fa3a450c4ca764$export$305f7d4e9d4624f2, (v) => $b8fa3a450c4ca764$export$305f7d4e9d4624f2 = v);
$parcel$export($b8fa3a450c4ca764$exports, "escapeExpression", () => $b8fa3a450c4ca764$export$e6d4483b22f6b058, (v) => $b8fa3a450c4ca764$export$e6d4483b22f6b058 = v);
$parcel$export($b8fa3a450c4ca764$exports, "isEmpty", () => $b8fa3a450c4ca764$export$dd1bc94b04021eeb, (v) => $b8fa3a450c4ca764$export$dd1bc94b04021eeb = v);
$parcel$export($b8fa3a450c4ca764$exports, "createFrame", () => $b8fa3a450c4ca764$export$52b3fe9f41f5650c, (v) => $b8fa3a450c4ca764$export$52b3fe9f41f5650c = v);
$parcel$export($b8fa3a450c4ca764$exports, "blockParams", () => $b8fa3a450c4ca764$export$b0cad7e592dd4356, (v) => $b8fa3a450c4ca764$export$b0cad7e592dd4356 = v);
$parcel$export($b8fa3a450c4ca764$exports, "appendContextPath", () => $b8fa3a450c4ca764$export$e0253507f826725a, (v) => $b8fa3a450c4ca764$export$e0253507f826725a = v);
$parcel$export($b8fa3a450c4ca764$exports, "toString", () => $b8fa3a450c4ca764$export$f84e8e69fd4488a5, (v) => $b8fa3a450c4ca764$export$f84e8e69fd4488a5 = v);
$parcel$export($b8fa3a450c4ca764$exports, "isFunction", () => $b8fa3a450c4ca764$export$f6e2535fb5126e54, (v) => $b8fa3a450c4ca764$export$f6e2535fb5126e54 = v);
$parcel$export($b8fa3a450c4ca764$exports, "isArray", () => $b8fa3a450c4ca764$export$43bee75e5e14138e, (v) => $b8fa3a450c4ca764$export$43bee75e5e14138e = v);
var $b8fa3a450c4ca764$export$1e511d4a378977f5;
var $b8fa3a450c4ca764$export$8b58be045bf06082;
var $b8fa3a450c4ca764$export$305f7d4e9d4624f2;
var $b8fa3a450c4ca764$export$e6d4483b22f6b058;
var $b8fa3a450c4ca764$export$dd1bc94b04021eeb;
var $b8fa3a450c4ca764$export$52b3fe9f41f5650c;
var $b8fa3a450c4ca764$export$b0cad7e592dd4356;
var $b8fa3a450c4ca764$export$e0253507f826725a;
var $b8fa3a450c4ca764$export$f84e8e69fd4488a5;
var $b8fa3a450c4ca764$export$f6e2535fb5126e54;
var $b8fa3a450c4ca764$export$43bee75e5e14138e;
"use strict";
$b8fa3a450c4ca764$export$1e511d4a378977f5 = true;
$b8fa3a450c4ca764$export$8b58be045bf06082 = $b8fa3a450c4ca764$var$extend;
$b8fa3a450c4ca764$export$305f7d4e9d4624f2 = $b8fa3a450c4ca764$var$indexOf;
$b8fa3a450c4ca764$export$e6d4483b22f6b058 = $b8fa3a450c4ca764$var$escapeExpression;
$b8fa3a450c4ca764$export$dd1bc94b04021eeb = $b8fa3a450c4ca764$var$isEmpty;
$b8fa3a450c4ca764$export$52b3fe9f41f5650c = $b8fa3a450c4ca764$var$createFrame;
$b8fa3a450c4ca764$export$b0cad7e592dd4356 = $b8fa3a450c4ca764$var$blockParams;
$b8fa3a450c4ca764$export$e0253507f826725a = $b8fa3a450c4ca764$var$appendContextPath;
var $b8fa3a450c4ca764$var$escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
var $b8fa3a450c4ca764$var$badChars = /[&<>"'`=]/g, $b8fa3a450c4ca764$var$possible = /[&<>"'`=]/;
function $b8fa3a450c4ca764$var$escapeChar(chr) {
    return $b8fa3a450c4ca764$var$escape[chr];
}
function $b8fa3a450c4ca764$var$extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var $b8fa3a450c4ca764$var$toString = Object.prototype.toString;
$b8fa3a450c4ca764$export$f84e8e69fd4488a5 = $b8fa3a450c4ca764$var$toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var $b8fa3a450c4ca764$var$isFunction = function isFunction(value) {
    return typeof value === "function";
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if ($b8fa3a450c4ca764$var$isFunction(/x/)) $b8fa3a450c4ca764$export$f6e2535fb5126e54 = $b8fa3a450c4ca764$var$isFunction = function(value) {
    return typeof value === "function" && $b8fa3a450c4ca764$var$toString.call(value) === "[object Function]";
};
$b8fa3a450c4ca764$export$f6e2535fb5126e54 = $b8fa3a450c4ca764$var$isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var $b8fa3a450c4ca764$var$isArray = Array.isArray || function(value) {
    return value && typeof value === "object" ? $b8fa3a450c4ca764$var$toString.call(value) === "[object Array]" : false;
};
$b8fa3a450c4ca764$export$43bee75e5e14138e = $b8fa3a450c4ca764$var$isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function $b8fa3a450c4ca764$var$indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function $b8fa3a450c4ca764$var$escapeExpression(string) {
    if (typeof string !== "string") {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return "";
        else if (!string) return string + "";
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = "" + string;
    }
    if (!$b8fa3a450c4ca764$var$possible.test(string)) return string;
    return string.replace($b8fa3a450c4ca764$var$badChars, $b8fa3a450c4ca764$var$escapeChar);
}
function $b8fa3a450c4ca764$var$isEmpty(value) {
    if (!value && value !== 0) return true;
    else if ($b8fa3a450c4ca764$var$isArray(value) && value.length === 0) return true;
    else return false;
}
function $b8fa3a450c4ca764$var$createFrame(object) {
    var frame = $b8fa3a450c4ca764$var$extend({}, object);
    frame._parent = object;
    return frame;
}
function $b8fa3a450c4ca764$var$blockParams(params, ids) {
    params.path = ids;
    return params;
}
function $b8fa3a450c4ca764$var$appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + "." : "") + id;
}


var $467be349c4662c93$exports = {};
"use strict";
$467be349c4662c93$exports.__esModule = true;
var $467be349c4662c93$var$errorProps = [
    "description",
    "fileName",
    "lineNumber",
    "endLineNumber",
    "message",
    "name",
    "number",
    "stack"
];
function $467be349c4662c93$var$Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < $467be349c4662c93$var$errorProps.length; idx++)this[$467be349c4662c93$var$errorProps[idx]] = tmp[$467be349c4662c93$var$errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, $467be349c4662c93$var$Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, "column", {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, "endColumn", {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
$467be349c4662c93$var$Exception.prototype = new Error();
$467be349c4662c93$exports["default"] = $467be349c4662c93$var$Exception;
$467be349c4662c93$exports = $467be349c4662c93$exports["default"];


var $78d876a9e9c4d43a$var$_exception2 = $78d876a9e9c4d43a$var$_interopRequireDefault($467be349c4662c93$exports);
var $cb1ceb8a2aea9ae5$export$1e511d4a378977f5;
var $cb1ceb8a2aea9ae5$export$bdf7582f74746f6b;
var $cb1ceb8a2aea9ae5$export$a8e22c3e8a03ea7e;
"use strict";
$cb1ceb8a2aea9ae5$export$1e511d4a378977f5 = true;
$cb1ceb8a2aea9ae5$export$bdf7582f74746f6b = $cb1ceb8a2aea9ae5$var$registerDefaultHelpers;
$cb1ceb8a2aea9ae5$export$a8e22c3e8a03ea7e = $cb1ceb8a2aea9ae5$var$moveHelperToHooks;
// istanbul ignore next
function $cb1ceb8a2aea9ae5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $707614a5b53ab15e$exports = {};
"use strict";
$707614a5b53ab15e$exports.__esModule = true;

$707614a5b53ab15e$exports["default"] = function(instance) {
    instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if ($b8fa3a450c4ca764$export$43bee75e5e14138e(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = $b8fa3a450c4ca764$export$52b3fe9f41f5650c(options.data);
                data.contextPath = $b8fa3a450c4ca764$export$e0253507f826725a(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
$707614a5b53ab15e$exports = $707614a5b53ab15e$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersBlockHelperMissing2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($707614a5b53ab15e$exports);
var $1e0024227cdb071e$exports = {};
"use strict";
$1e0024227cdb071e$exports.__esModule = true;
// istanbul ignore next
function $1e0024227cdb071e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


var $1e0024227cdb071e$var$_exception2 = $1e0024227cdb071e$var$_interopRequireDefault($467be349c4662c93$exports);
$1e0024227cdb071e$exports["default"] = function(instance) {
    instance.registerHelper("each", function(context, options) {
        if (!options) throw new $1e0024227cdb071e$var$_exception2["default"]("Must pass iterator to #each");
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = $b8fa3a450c4ca764$export$e0253507f826725a(options.data.contextPath, options.ids[0]) + ".";
        if ($b8fa3a450c4ca764$export$f6e2535fb5126e54(context)) context = context.call(this);
        if (options.data) data = $b8fa3a450c4ca764$export$52b3fe9f41f5650c(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: $b8fa3a450c4ca764$export$b0cad7e592dd4356([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === "object") {
            if ($b8fa3a450c4ca764$export$43bee75e5e14138e(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if ($parcel$global.Symbol && context[$parcel$global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[$parcel$global.Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
$1e0024227cdb071e$exports = $1e0024227cdb071e$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersEach2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($1e0024227cdb071e$exports);
var $0c1355732a944632$exports = {};
"use strict";
$0c1355732a944632$exports.__esModule = true;
// istanbul ignore next
function $0c1355732a944632$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

var $0c1355732a944632$var$_exception2 = $0c1355732a944632$var$_interopRequireDefault($467be349c4662c93$exports);
$0c1355732a944632$exports["default"] = function(instance) {
    instance.registerHelper("helperMissing", function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new $0c1355732a944632$var$_exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
$0c1355732a944632$exports = $0c1355732a944632$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersHelperMissing2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($0c1355732a944632$exports);
var $658f152d580ba8a1$exports = {};
"use strict";
$658f152d580ba8a1$exports.__esModule = true;
// istanbul ignore next
function $658f152d580ba8a1$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


var $658f152d580ba8a1$var$_exception2 = $658f152d580ba8a1$var$_interopRequireDefault($467be349c4662c93$exports);
$658f152d580ba8a1$exports["default"] = function(instance) {
    instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) throw new $658f152d580ba8a1$var$_exception2["default"]("#if requires exactly one argument");
        if ($b8fa3a450c4ca764$export$f6e2535fb5126e54(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || $b8fa3a450c4ca764$export$dd1bc94b04021eeb(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) throw new $658f152d580ba8a1$var$_exception2["default"]("#unless requires exactly one argument");
        return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
$658f152d580ba8a1$exports = $658f152d580ba8a1$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersIf2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($658f152d580ba8a1$exports);
var $aa7fc2a7649dfeff$exports = {};
"use strict";
$aa7fc2a7649dfeff$exports.__esModule = true;
$aa7fc2a7649dfeff$exports["default"] = function(instance) {
    instance.registerHelper("log", function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
$aa7fc2a7649dfeff$exports = $aa7fc2a7649dfeff$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersLog2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($aa7fc2a7649dfeff$exports);
var $6ee28a5564c0593a$exports = {};
"use strict";
$6ee28a5564c0593a$exports.__esModule = true;
$6ee28a5564c0593a$exports["default"] = function(instance) {
    instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
$6ee28a5564c0593a$exports = $6ee28a5564c0593a$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersLookup2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($6ee28a5564c0593a$exports);
var $d9c81bd4dc3e5d73$exports = {};
"use strict";
$d9c81bd4dc3e5d73$exports.__esModule = true;
// istanbul ignore next
function $d9c81bd4dc3e5d73$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


var $d9c81bd4dc3e5d73$var$_exception2 = $d9c81bd4dc3e5d73$var$_interopRequireDefault($467be349c4662c93$exports);
$d9c81bd4dc3e5d73$exports["default"] = function(instance) {
    instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) throw new $d9c81bd4dc3e5d73$var$_exception2["default"]("#with requires exactly one argument");
        if ($b8fa3a450c4ca764$export$f6e2535fb5126e54(context)) context = context.call(this);
        var fn = options.fn;
        if (!$b8fa3a450c4ca764$export$dd1bc94b04021eeb(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = $b8fa3a450c4ca764$export$52b3fe9f41f5650c(options.data);
                data.contextPath = $b8fa3a450c4ca764$export$e0253507f826725a(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: $b8fa3a450c4ca764$export$b0cad7e592dd4356([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
$d9c81bd4dc3e5d73$exports = $d9c81bd4dc3e5d73$exports["default"];


var $cb1ceb8a2aea9ae5$var$_helpersWith2 = $cb1ceb8a2aea9ae5$var$_interopRequireDefault($d9c81bd4dc3e5d73$exports);
function $cb1ceb8a2aea9ae5$var$registerDefaultHelpers(instance) {
    $cb1ceb8a2aea9ae5$var$_helpersBlockHelperMissing2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersEach2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersHelperMissing2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersIf2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersLog2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersLookup2["default"](instance);
    $cb1ceb8a2aea9ae5$var$_helpersWith2["default"](instance);
}
function $cb1ceb8a2aea9ae5$var$moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) delete instance.helpers[helperName];
    }
}


var $bfceec3bf67974fe$export$1e511d4a378977f5;
var $bfceec3bf67974fe$export$7eaca4a3d56dbe6d;
"use strict";
$bfceec3bf67974fe$export$1e511d4a378977f5 = true;
$bfceec3bf67974fe$export$7eaca4a3d56dbe6d = $bfceec3bf67974fe$var$registerDefaultDecorators;
// istanbul ignore next
function $bfceec3bf67974fe$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $8942bc6e4927d50e$exports = {};
"use strict";
$8942bc6e4927d50e$exports.__esModule = true;

$8942bc6e4927d50e$exports["default"] = function(instance) {
    instance.registerDecorator("inline", function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {};
            ret = function(context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = $b8fa3a450c4ca764$export$8b58be045bf06082({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
$8942bc6e4927d50e$exports = $8942bc6e4927d50e$exports["default"];


var $bfceec3bf67974fe$var$_decoratorsInline2 = $bfceec3bf67974fe$var$_interopRequireDefault($8942bc6e4927d50e$exports);
function $bfceec3bf67974fe$var$registerDefaultDecorators(instance) {
    $bfceec3bf67974fe$var$_decoratorsInline2["default"](instance);
}


var $236e6fcc354ed6cc$exports = {};
"use strict";
$236e6fcc354ed6cc$exports.__esModule = true;

var $236e6fcc354ed6cc$var$logger = {
    methodMap: [
        "debug",
        "info",
        "warn",
        "error"
    ],
    level: "info",
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
            var levelMap = $b8fa3a450c4ca764$export$305f7d4e9d4624f2($236e6fcc354ed6cc$var$logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = $236e6fcc354ed6cc$var$logger.lookupLevel(level);
        if (typeof console !== "undefined" && $236e6fcc354ed6cc$var$logger.lookupLevel($236e6fcc354ed6cc$var$logger.level) <= level) {
            var method = $236e6fcc354ed6cc$var$logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = "log";
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
$236e6fcc354ed6cc$exports["default"] = $236e6fcc354ed6cc$var$logger;
$236e6fcc354ed6cc$exports = $236e6fcc354ed6cc$exports["default"];


var $78d876a9e9c4d43a$var$_logger2 = $78d876a9e9c4d43a$var$_interopRequireDefault($236e6fcc354ed6cc$exports);
var $9d824e2da26352de$export$1e511d4a378977f5;
var $9d824e2da26352de$export$9fc505f5102b04a5;
var $9d824e2da26352de$export$8b633651c7cf59b9;
var $9d824e2da26352de$export$419dc2c4b2f2238b;
"use strict";
$9d824e2da26352de$export$1e511d4a378977f5 = true;
$9d824e2da26352de$export$9fc505f5102b04a5 = $9d824e2da26352de$var$createProtoAccessControl;
$9d824e2da26352de$export$8b633651c7cf59b9 = $9d824e2da26352de$var$resultIsAllowed;
$9d824e2da26352de$export$419dc2c4b2f2238b = $9d824e2da26352de$var$resetLoggedProperties;
// istanbul ignore next
function $9d824e2da26352de$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var $9153c364b7c9a5fb$export$1e511d4a378977f5;
var $9153c364b7c9a5fb$export$ec2932ee0c0e8dcc;
"use strict";
$9153c364b7c9a5fb$export$1e511d4a378977f5 = true;
$9153c364b7c9a5fb$export$ec2932ee0c0e8dcc = $9153c364b7c9a5fb$var$createNewLookupObject;

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */ function $9153c364b7c9a5fb$var$createNewLookupObject() {
    for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    return $b8fa3a450c4ca764$export$8b58be045bf06082.apply(undefined, [
        Object.create(null)
    ].concat(sources));
}



var $9d824e2da26352de$var$logger = $9d824e2da26352de$var$_interopRequireWildcard($236e6fcc354ed6cc$exports);
var $9d824e2da26352de$var$loggedProperties = Object.create(null);
function $9d824e2da26352de$var$createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList["constructor"] = false;
    defaultMethodWhiteList["__defineGetter__"] = false;
    defaultMethodWhiteList["__defineSetter__"] = false;
    defaultMethodWhiteList["__lookupGetter__"] = false;
    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList["__proto__"] = false;
    return {
        properties: {
            whitelist: $9153c364b7c9a5fb$export$ec2932ee0c0e8dcc(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: $9153c364b7c9a5fb$export$ec2932ee0c0e8dcc(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function $9d824e2da26352de$var$resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === "function") return $9d824e2da26352de$var$checkWhiteList(protoAccessControl.methods, propertyName);
    else return $9d824e2da26352de$var$checkWhiteList(protoAccessControl.properties, propertyName);
}
function $9d824e2da26352de$var$checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    $9d824e2da26352de$var$logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function $9d824e2da26352de$var$logUnexpecedPropertyAccessOnce(propertyName) {
    if ($9d824e2da26352de$var$loggedProperties[propertyName] !== true) {
        $9d824e2da26352de$var$loggedProperties[propertyName] = true;
        $9d824e2da26352de$var$logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
    }
}
function $9d824e2da26352de$var$resetLoggedProperties() {
    Object.keys($9d824e2da26352de$var$loggedProperties).forEach(function(propertyName) {
        delete $9d824e2da26352de$var$loggedProperties[propertyName];
    });
}


var $78d876a9e9c4d43a$var$VERSION = "4.7.7";
$78d876a9e9c4d43a$export$a4ad2735b021c132 = $78d876a9e9c4d43a$var$VERSION;
var $78d876a9e9c4d43a$var$COMPILER_REVISION = 8;
$78d876a9e9c4d43a$export$682db5a6f2fa1046 = $78d876a9e9c4d43a$var$COMPILER_REVISION;
var $78d876a9e9c4d43a$var$LAST_COMPATIBLE_COMPILER_REVISION = 7;
$78d876a9e9c4d43a$export$b416520f9fd5c520 = $78d876a9e9c4d43a$var$LAST_COMPATIBLE_COMPILER_REVISION;
var $78d876a9e9c4d43a$var$REVISION_CHANGES = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
};
$78d876a9e9c4d43a$export$534648964353ca81 = $78d876a9e9c4d43a$var$REVISION_CHANGES;
var $78d876a9e9c4d43a$var$objectType = "[object Object]";
function $78d876a9e9c4d43a$var$HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    $cb1ceb8a2aea9ae5$export$bdf7582f74746f6b(this);
    $bfceec3bf67974fe$export$7eaca4a3d56dbe6d(this);
}
$78d876a9e9c4d43a$var$HandlebarsEnvironment.prototype = {
    constructor: $78d876a9e9c4d43a$var$HandlebarsEnvironment,
    logger: $78d876a9e9c4d43a$var$_logger2["default"],
    log: $78d876a9e9c4d43a$var$_logger2["default"].log,
    registerHelper: function registerHelper(name, fn) {
        if ($b8fa3a450c4ca764$export$f84e8e69fd4488a5.call(name) === $78d876a9e9c4d43a$var$objectType) {
            if (fn) throw new $78d876a9e9c4d43a$var$_exception2["default"]("Arg not supported with multiple helpers");
            $b8fa3a450c4ca764$export$8b58be045bf06082(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if ($b8fa3a450c4ca764$export$f84e8e69fd4488a5.call(name) === $78d876a9e9c4d43a$var$objectType) $b8fa3a450c4ca764$export$8b58be045bf06082(this.partials, name);
        else {
            if (typeof partial === "undefined") throw new $78d876a9e9c4d43a$var$_exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if ($b8fa3a450c4ca764$export$f84e8e69fd4488a5.call(name) === $78d876a9e9c4d43a$var$objectType) {
            if (fn) throw new $78d876a9e9c4d43a$var$_exception2["default"]("Arg not supported with multiple decorators");
            $b8fa3a450c4ca764$export$8b58be045bf06082(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        $9d824e2da26352de$export$419dc2c4b2f2238b();
    }
};
var $78d876a9e9c4d43a$var$log = $78d876a9e9c4d43a$var$_logger2["default"].log;
$78d876a9e9c4d43a$export$bef1f36f5486a6a3 = $78d876a9e9c4d43a$var$log;
$78d876a9e9c4d43a$export$52b3fe9f41f5650c = $b8fa3a450c4ca764$export$52b3fe9f41f5650c;
$78d876a9e9c4d43a$export$af88d00dbe7f521 = $78d876a9e9c4d43a$var$_logger2["default"];


var $a849cd18a2d2eff4$var$base = $a849cd18a2d2eff4$var$_interopRequireWildcard($78d876a9e9c4d43a$exports);
var $fe313fc8fa1f218e$exports = {};
// Build out our basic SafeString type
"use strict";
$fe313fc8fa1f218e$exports.__esModule = true;
function $fe313fc8fa1f218e$var$SafeString(string) {
    this.string = string;
}
$fe313fc8fa1f218e$var$SafeString.prototype.toString = $fe313fc8fa1f218e$var$SafeString.prototype.toHTML = function() {
    return "" + this.string;
};
$fe313fc8fa1f218e$exports["default"] = $fe313fc8fa1f218e$var$SafeString;
$fe313fc8fa1f218e$exports = $fe313fc8fa1f218e$exports["default"];


var $a849cd18a2d2eff4$var$_handlebarsSafeString2 = $a849cd18a2d2eff4$var$_interopRequireDefault($fe313fc8fa1f218e$exports);

var $a849cd18a2d2eff4$var$_handlebarsException2 = $a849cd18a2d2eff4$var$_interopRequireDefault($467be349c4662c93$exports);

var $a849cd18a2d2eff4$var$Utils = $a849cd18a2d2eff4$var$_interopRequireWildcard($b8fa3a450c4ca764$exports);
var $089f801d8b92916a$exports = {};

$parcel$export($089f801d8b92916a$exports, "__esModule", () => $089f801d8b92916a$export$1e511d4a378977f5, (v) => $089f801d8b92916a$export$1e511d4a378977f5 = v);
$parcel$export($089f801d8b92916a$exports, "checkRevision", () => $089f801d8b92916a$export$1a97de37fc44aecb, (v) => $089f801d8b92916a$export$1a97de37fc44aecb = v);
$parcel$export($089f801d8b92916a$exports, "template", () => $089f801d8b92916a$export$ce69bd05624d0c48, (v) => $089f801d8b92916a$export$ce69bd05624d0c48 = v);
$parcel$export($089f801d8b92916a$exports, "wrapProgram", () => $089f801d8b92916a$export$3976c39aa34be3b, (v) => $089f801d8b92916a$export$3976c39aa34be3b = v);
$parcel$export($089f801d8b92916a$exports, "resolvePartial", () => $089f801d8b92916a$export$ee54384c867bf98e, (v) => $089f801d8b92916a$export$ee54384c867bf98e = v);
$parcel$export($089f801d8b92916a$exports, "invokePartial", () => $089f801d8b92916a$export$6c4303200e44071a, (v) => $089f801d8b92916a$export$6c4303200e44071a = v);
$parcel$export($089f801d8b92916a$exports, "noop", () => $089f801d8b92916a$export$8793edee2d425525, (v) => $089f801d8b92916a$export$8793edee2d425525 = v);
var $089f801d8b92916a$export$1e511d4a378977f5;
var $089f801d8b92916a$export$1a97de37fc44aecb;
var $089f801d8b92916a$export$ce69bd05624d0c48;
var $089f801d8b92916a$export$3976c39aa34be3b;
var $089f801d8b92916a$export$ee54384c867bf98e;
var $089f801d8b92916a$export$6c4303200e44071a;
var $089f801d8b92916a$export$8793edee2d425525;
"use strict";
$089f801d8b92916a$export$1e511d4a378977f5 = true;
$089f801d8b92916a$export$1a97de37fc44aecb = $089f801d8b92916a$var$checkRevision;
$089f801d8b92916a$export$ce69bd05624d0c48 = $089f801d8b92916a$var$template;
$089f801d8b92916a$export$3976c39aa34be3b = $089f801d8b92916a$var$wrapProgram;
$089f801d8b92916a$export$ee54384c867bf98e = $089f801d8b92916a$var$resolvePartial;
$089f801d8b92916a$export$6c4303200e44071a = $089f801d8b92916a$var$invokePartial;
$089f801d8b92916a$export$8793edee2d425525 = $089f801d8b92916a$var$noop;
// istanbul ignore next
function $089f801d8b92916a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function $089f801d8b92916a$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}

var $089f801d8b92916a$var$Utils = $089f801d8b92916a$var$_interopRequireWildcard($b8fa3a450c4ca764$exports);

var $089f801d8b92916a$var$_exception2 = $089f801d8b92916a$var$_interopRequireDefault($467be349c4662c93$exports);


var $1480d9846a33f9a4$export$1e511d4a378977f5;
var $1480d9846a33f9a4$export$34b84bc8884ca465;
"use strict";
$1480d9846a33f9a4$export$1e511d4a378977f5 = true;
$1480d9846a33f9a4$export$34b84bc8884ca465 = $1480d9846a33f9a4$var$wrapHelper;
function $1480d9846a33f9a4$var$wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}



function $089f801d8b92916a$var$checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = $78d876a9e9c4d43a$export$682db5a6f2fa1046;
    if (compilerRevision >= $78d876a9e9c4d43a$export$b416520f9fd5c520 && compilerRevision <= $78d876a9e9c4d43a$export$682db5a6f2fa1046) return;
    if (compilerRevision < $78d876a9e9c4d43a$export$b416520f9fd5c520) {
        var runtimeVersions = $78d876a9e9c4d43a$export$534648964353ca81[currentRevision], compilerVersions = $78d876a9e9c4d43a$export$534648964353ca81[compilerRevision];
        throw new $089f801d8b92916a$var$_exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new $089f801d8b92916a$var$_exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
}
function $089f801d8b92916a$var$template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new $089f801d8b92916a$var$_exception2["default"]("No environment passed to template");
    if (!templateSpec || !templateSpec.main) throw new $089f801d8b92916a$var$_exception2["default"]("Unknown template object: " + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = $089f801d8b92916a$var$Utils.extend({}, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = $089f801d8b92916a$var$Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split("\n");
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join("\n");
            }
            return result;
        } else throw new $089f801d8b92916a$var$_exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new $089f801d8b92916a$var$_exception2["default"]('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if ($9d824e2da26352de$export$8b633651c7cf59b9(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return depths[i][name];
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: $089f801d8b92916a$var$Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + "_d"];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = $089f801d8b92916a$var$wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = $089f801d8b92916a$var$wrapProgram(this, i, fn);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = $089f801d8b92916a$var$Utils.extend({}, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) data = $089f801d8b92916a$var$initData(context, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context != options.depths[0] ? [
                context
            ].concat(options.depths) : options.depths;
            else depths = [
                context
            ];
        }
        function main(context /*, options*/ ) {
            return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = $089f801d8b92916a$var$executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = $089f801d8b92916a$var$Utils.extend({}, env.helpers, options.helpers);
            $089f801d8b92916a$var$wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = $089f801d8b92916a$var$Utils.extend({}, env.decorators, options.decorators);
            container.hooks = {};
            container.protoAccessControl = $9d824e2da26352de$export$9fc505f5102b04a5(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            $cb1ceb8a2aea9ae5$export$a8e22c3e8a03ea7e(container, "helperMissing", keepHelperInHelpers);
            $cb1ceb8a2aea9ae5$export$a8e22c3e8a03ea7e(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new $089f801d8b92916a$var$_exception2["default"]("must pass block params");
        if (templateSpec.useDepths && !depths) throw new $089f801d8b92916a$var$_exception2["default"]("must pass parent depths");
        return $089f801d8b92916a$var$wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function $089f801d8b92916a$var$wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = $089f801d8b92916a$var$executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function $089f801d8b92916a$var$resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === "@partial-block") partial = options.data["partial-block"];
        else partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function $089f801d8b92916a$var$invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data["partial-block"];
    options.partial = true;
    if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
    var partialBlock = undefined;
    if (options.fn && options.fn !== $089f801d8b92916a$var$noop) (function() {
        options.data = $78d876a9e9c4d43a$export$52b3fe9f41f5650c(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = $78d876a9e9c4d43a$export$52b3fe9f41f5650c(options.data);
            options.data["partial-block"] = currentPartialBlock;
            return fn(context, options);
        };
        if (fn.partials) options.partials = $089f801d8b92916a$var$Utils.extend({}, options.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new $089f801d8b92916a$var$_exception2["default"]("The partial " + options.name + " could not be found");
    else if (partial instanceof Function) return partial(context, options);
}
function $089f801d8b92916a$var$noop() {
    return "";
}
function $089f801d8b92916a$var$initData(context, data) {
    if (!data || !("root" in data)) {
        data = data ? $78d876a9e9c4d43a$export$52b3fe9f41f5650c(data) : {};
        data.root = context;
    }
    return data;
}
function $089f801d8b92916a$var$executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        $089f801d8b92916a$var$Utils.extend(prog, props);
    }
    return prog;
}
function $089f801d8b92916a$var$wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = $089f801d8b92916a$var$passLookupPropertyOption(helper, container);
    });
}
function $089f801d8b92916a$var$passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return $1480d9846a33f9a4$export$34b84bc8884ca465(helper, function(options) {
        return $089f801d8b92916a$var$Utils.extend({
            lookupProperty: lookupProperty
        }, options);
    });
}


var $a849cd18a2d2eff4$var$runtime = $a849cd18a2d2eff4$var$_interopRequireWildcard($089f801d8b92916a$exports);
var $6bfcd45083f76ec1$exports = {};
"use strict";
$6bfcd45083f76ec1$exports.__esModule = true;
$6bfcd45083f76ec1$exports["default"] = function(Handlebars) {
    /* istanbul ignore next */ var root = typeof $parcel$global !== "undefined" ? $parcel$global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
        return Handlebars;
    };
};
$6bfcd45083f76ec1$exports = $6bfcd45083f76ec1$exports["default"];


var $a849cd18a2d2eff4$var$_handlebarsNoConflict2 = $a849cd18a2d2eff4$var$_interopRequireDefault($6bfcd45083f76ec1$exports);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function $a849cd18a2d2eff4$var$create() {
    var hb = new $a849cd18a2d2eff4$var$base.HandlebarsEnvironment();
    $a849cd18a2d2eff4$var$Utils.extend(hb, $a849cd18a2d2eff4$var$base);
    hb.SafeString = $a849cd18a2d2eff4$var$_handlebarsSafeString2["default"];
    hb.Exception = $a849cd18a2d2eff4$var$_handlebarsException2["default"];
    hb.Utils = $a849cd18a2d2eff4$var$Utils;
    hb.escapeExpression = $a849cd18a2d2eff4$var$Utils.escapeExpression;
    hb.VM = $a849cd18a2d2eff4$var$runtime;
    hb.template = function(spec) {
        return $a849cd18a2d2eff4$var$runtime.template(spec, hb);
    };
    return hb;
}
var $a849cd18a2d2eff4$var$inst = $a849cd18a2d2eff4$var$create();
$a849cd18a2d2eff4$var$inst.create = $a849cd18a2d2eff4$var$create;
$a849cd18a2d2eff4$var$_handlebarsNoConflict2["default"]($a849cd18a2d2eff4$var$inst);
$a849cd18a2d2eff4$var$inst["default"] = $a849cd18a2d2eff4$var$inst;
$a849cd18a2d2eff4$exports["default"] = $a849cd18a2d2eff4$var$inst;
$a849cd18a2d2eff4$exports = $a849cd18a2d2eff4$exports["default"];


var $2090716501b0b8bd$var$_handlebarsRuntime2 = $2090716501b0b8bd$var$_interopRequireDefault($a849cd18a2d2eff4$exports);
var $cfbabbe615138dca$exports = {};
"use strict";
$cfbabbe615138dca$exports.__esModule = true;
var $cfbabbe615138dca$var$AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !$cfbabbe615138dca$var$AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
$cfbabbe615138dca$exports["default"] = $cfbabbe615138dca$var$AST;
$cfbabbe615138dca$exports = $cfbabbe615138dca$exports["default"];


var $2090716501b0b8bd$var$_handlebarsCompilerAst2 = $2090716501b0b8bd$var$_interopRequireDefault($cfbabbe615138dca$exports);
var $1d7ee94b74691e92$export$1e511d4a378977f5;
var $1d7ee94b74691e92$export$fc85b2c4462e0bc6;
var $1d7ee94b74691e92$export$98e6a39c04603d36;
var $1d7ee94b74691e92$export$8f49e4af10703ce3;
"use strict";
$1d7ee94b74691e92$export$1e511d4a378977f5 = true;
$1d7ee94b74691e92$export$fc85b2c4462e0bc6 = $1d7ee94b74691e92$var$parseWithoutProcessing;
$1d7ee94b74691e92$export$98e6a39c04603d36 = $1d7ee94b74691e92$var$parse;
// istanbul ignore next
function $1d7ee94b74691e92$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
// istanbul ignore next
function $1d7ee94b74691e92$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $85ba3456041dcd99$exports = {};
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
$85ba3456041dcd99$exports.__esModule = true;
var $85ba3456041dcd99$var$handlebars = function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: "CommentStatement",
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: "ContentStatement",
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: "PartialStatement",
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: "",
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: "SubExpression",
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: "Hash",
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: "HashPair",
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: "StringLiteral",
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: "NumberLiteral",
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: "BooleanLiteral",
                        value: $$[$0] === "true",
                        original: $$[$0] === "true",
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: "UndefinedLiteral",
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: "NullLiteral",
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer = function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== "undefined") return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin("raw");
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === "raw") return 15;
                    else {
                        strip(5, 9);
                        return "END_RAW_BLOCK";
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin("raw");
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin("com");
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                    return 72;
                case 43:
                    return "INVALID";
                case 44:
                    return 5;
            }
        };
        lexer.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
$85ba3456041dcd99$exports["default"] = $85ba3456041dcd99$var$handlebars;
$85ba3456041dcd99$exports = $85ba3456041dcd99$exports["default"];


var $1d7ee94b74691e92$var$_parser2 = $1d7ee94b74691e92$var$_interopRequireDefault($85ba3456041dcd99$exports);
var $c68fa2fc2a953973$exports = {};
"use strict";
$c68fa2fc2a953973$exports.__esModule = true;
// istanbul ignore next
function $c68fa2fc2a953973$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var $099a30fa67250b61$exports = {};
"use strict";
$099a30fa67250b61$exports.__esModule = true;
// istanbul ignore next
function $099a30fa67250b61$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

var $099a30fa67250b61$var$_exception2 = $099a30fa67250b61$var$_interopRequireDefault($467be349c4662c93$exports);
function $099a30fa67250b61$var$Visitor() {
    this.parents = [];
}
$099a30fa67250b61$var$Visitor.prototype = {
    constructor: $099a30fa67250b61$var$Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !$099a30fa67250b61$var$Visitor.prototype[value.type]) throw new $099a30fa67250b61$var$_exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new $099a30fa67250b61$var$_exception2["default"](node.type + " requires " + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new $099a30fa67250b61$var$_exception2["default"]("Unknown type: " + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: $099a30fa67250b61$var$visitSubExpression,
    Decorator: $099a30fa67250b61$var$visitSubExpression,
    BlockStatement: $099a30fa67250b61$var$visitBlock,
    DecoratorBlock: $099a30fa67250b61$var$visitBlock,
    PartialStatement: $099a30fa67250b61$var$visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        $099a30fa67250b61$var$visitPartial.call(this, partial);
        this.acceptKey(partial, "program");
    },
    ContentStatement: function ContentStatement() /* content */ {},
    CommentStatement: function CommentStatement() /* comment */ {},
    SubExpression: $099a30fa67250b61$var$visitSubExpression,
    PathExpression: function PathExpression() /* path */ {},
    StringLiteral: function StringLiteral() /* string */ {},
    NumberLiteral: function NumberLiteral() /* number */ {},
    BooleanLiteral: function BooleanLiteral() /* bool */ {},
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
    NullLiteral: function NullLiteral() /* literal */ {},
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, "value");
    }
};
function $099a30fa67250b61$var$visitSubExpression(mustache) {
    this.acceptRequired(mustache, "path");
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, "hash");
}
function $099a30fa67250b61$var$visitBlock(block) {
    $099a30fa67250b61$var$visitSubExpression.call(this, block);
    this.acceptKey(block, "program");
    this.acceptKey(block, "inverse");
}
function $099a30fa67250b61$var$visitPartial(partial) {
    this.acceptRequired(partial, "name");
    this.acceptArray(partial.params);
    this.acceptKey(partial, "hash");
}
$099a30fa67250b61$exports["default"] = $099a30fa67250b61$var$Visitor;
$099a30fa67250b61$exports = $099a30fa67250b61$exports["default"];


var $c68fa2fc2a953973$var$_visitor2 = $c68fa2fc2a953973$var$_interopRequireDefault($099a30fa67250b61$exports);
function $c68fa2fc2a953973$var$WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
}
$c68fa2fc2a953973$var$WhitespaceControl.prototype = new $c68fa2fc2a953973$var$_visitor2["default"]();
$c68fa2fc2a953973$var$WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = $c68fa2fc2a953973$var$isPrevWhitespace(body, i, isRoot), _isNextWhitespace = $c68fa2fc2a953973$var$isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) $c68fa2fc2a953973$var$omitRight(body, i, true);
        if (strip.open) $c68fa2fc2a953973$var$omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            $c68fa2fc2a953973$var$omitRight(body, i);
            if ($c68fa2fc2a953973$var$omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === "PartialStatement") // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            $c68fa2fc2a953973$var$omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            $c68fa2fc2a953973$var$omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            $c68fa2fc2a953973$var$omitRight(body, i);
            $c68fa2fc2a953973$var$omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
$c68fa2fc2a953973$var$WhitespaceControl.prototype.BlockStatement = $c68fa2fc2a953973$var$WhitespaceControl.prototype.DecoratorBlock = $c68fa2fc2a953973$var$WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: $c68fa2fc2a953973$var$isNextWhitespace(program.body),
        closeStandalone: $c68fa2fc2a953973$var$isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) $c68fa2fc2a953973$var$omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) $c68fa2fc2a953973$var$omitLeft(program.body, null, true);
        if (inverseStrip.close) $c68fa2fc2a953973$var$omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) $c68fa2fc2a953973$var$omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && $c68fa2fc2a953973$var$isPrevWhitespace(program.body) && $c68fa2fc2a953973$var$isNextWhitespace(firstInverse.body)) {
            $c68fa2fc2a953973$var$omitLeft(program.body);
            $c68fa2fc2a953973$var$omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) $c68fa2fc2a953973$var$omitLeft(program.body, null, true);
    return strip;
};
$c68fa2fc2a953973$var$WhitespaceControl.prototype.Decorator = $c68fa2fc2a953973$var$WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
$c68fa2fc2a953973$var$WhitespaceControl.prototype.PartialStatement = $c68fa2fc2a953973$var$WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {};
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function $c68fa2fc2a953973$var$isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === "ContentStatement") return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function $c68fa2fc2a953973$var$isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === "ContentStatement") return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function $c68fa2fc2a953973$var$omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function $c68fa2fc2a953973$var$omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
$c68fa2fc2a953973$exports["default"] = $c68fa2fc2a953973$var$WhitespaceControl;
$c68fa2fc2a953973$exports = $c68fa2fc2a953973$exports["default"];


var $1d7ee94b74691e92$var$_whitespaceControl2 = $1d7ee94b74691e92$var$_interopRequireDefault($c68fa2fc2a953973$exports);
var $87b575b2317f858c$exports = {};

$parcel$export($87b575b2317f858c$exports, "__esModule", () => $87b575b2317f858c$export$1e511d4a378977f5, (v) => $87b575b2317f858c$export$1e511d4a378977f5 = v);
$parcel$export($87b575b2317f858c$exports, "SourceLocation", () => $87b575b2317f858c$export$7387db7caf96fcdb, (v) => $87b575b2317f858c$export$7387db7caf96fcdb = v);
$parcel$export($87b575b2317f858c$exports, "id", () => $87b575b2317f858c$export$d560c7e4a29451c2, (v) => $87b575b2317f858c$export$d560c7e4a29451c2 = v);
$parcel$export($87b575b2317f858c$exports, "stripFlags", () => $87b575b2317f858c$export$a56883f706fd4153, (v) => $87b575b2317f858c$export$a56883f706fd4153 = v);
$parcel$export($87b575b2317f858c$exports, "stripComment", () => $87b575b2317f858c$export$b0ad15fcf54729ff, (v) => $87b575b2317f858c$export$b0ad15fcf54729ff = v);
$parcel$export($87b575b2317f858c$exports, "preparePath", () => $87b575b2317f858c$export$ea68d0dfa0ba072f, (v) => $87b575b2317f858c$export$ea68d0dfa0ba072f = v);
$parcel$export($87b575b2317f858c$exports, "prepareMustache", () => $87b575b2317f858c$export$6b8089a1dfd22498, (v) => $87b575b2317f858c$export$6b8089a1dfd22498 = v);
$parcel$export($87b575b2317f858c$exports, "prepareRawBlock", () => $87b575b2317f858c$export$c642052fcb02035b, (v) => $87b575b2317f858c$export$c642052fcb02035b = v);
$parcel$export($87b575b2317f858c$exports, "prepareBlock", () => $87b575b2317f858c$export$9814855d713f4497, (v) => $87b575b2317f858c$export$9814855d713f4497 = v);
$parcel$export($87b575b2317f858c$exports, "prepareProgram", () => $87b575b2317f858c$export$6e1c63ef90231a66, (v) => $87b575b2317f858c$export$6e1c63ef90231a66 = v);
$parcel$export($87b575b2317f858c$exports, "preparePartialBlock", () => $87b575b2317f858c$export$8b47bc71272f067a, (v) => $87b575b2317f858c$export$8b47bc71272f067a = v);
var $87b575b2317f858c$export$1e511d4a378977f5;
var $87b575b2317f858c$export$7387db7caf96fcdb;
var $87b575b2317f858c$export$d560c7e4a29451c2;
var $87b575b2317f858c$export$a56883f706fd4153;
var $87b575b2317f858c$export$b0ad15fcf54729ff;
var $87b575b2317f858c$export$ea68d0dfa0ba072f;
var $87b575b2317f858c$export$6b8089a1dfd22498;
var $87b575b2317f858c$export$c642052fcb02035b;
var $87b575b2317f858c$export$9814855d713f4497;
var $87b575b2317f858c$export$6e1c63ef90231a66;
var $87b575b2317f858c$export$8b47bc71272f067a;
"use strict";
$87b575b2317f858c$export$1e511d4a378977f5 = true;
$87b575b2317f858c$export$7387db7caf96fcdb = $87b575b2317f858c$var$SourceLocation;
$87b575b2317f858c$export$d560c7e4a29451c2 = $87b575b2317f858c$var$id;
$87b575b2317f858c$export$a56883f706fd4153 = $87b575b2317f858c$var$stripFlags;
$87b575b2317f858c$export$b0ad15fcf54729ff = $87b575b2317f858c$var$stripComment;
$87b575b2317f858c$export$ea68d0dfa0ba072f = $87b575b2317f858c$var$preparePath;
$87b575b2317f858c$export$6b8089a1dfd22498 = $87b575b2317f858c$var$prepareMustache;
$87b575b2317f858c$export$c642052fcb02035b = $87b575b2317f858c$var$prepareRawBlock;
$87b575b2317f858c$export$9814855d713f4497 = $87b575b2317f858c$var$prepareBlock;
$87b575b2317f858c$export$6e1c63ef90231a66 = $87b575b2317f858c$var$prepareProgram;
$87b575b2317f858c$export$8b47bc71272f067a = $87b575b2317f858c$var$preparePartialBlock;
// istanbul ignore next
function $87b575b2317f858c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

var $87b575b2317f858c$var$_exception2 = $87b575b2317f858c$var$_interopRequireDefault($467be349c4662c93$exports);
function $87b575b2317f858c$var$validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new $87b575b2317f858c$var$_exception2["default"](open.path.original + " doesn't match " + close, errorNode);
    }
}
function $87b575b2317f858c$var$SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function $87b575b2317f858c$var$id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function $87b575b2317f858c$var$stripFlags(open, close) {
    return {
        open: open.charAt(2) === "~",
        close: close.charAt(close.length - 3) === "~"
    };
}
function $87b575b2317f858c$var$stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function $87b575b2317f858c$var$preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? "@" : "", dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || "") + part;
        if (!isLiteral && (part === ".." || part === "." || part === "this")) {
            if (dig.length > 0) throw new $87b575b2317f858c$var$_exception2["default"]("Invalid path: " + original, {
                loc: loc
            });
            else if (part === "..") depth++;
        } else dig.push(part);
    }
    return {
        type: "PathExpression",
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function $87b575b2317f858c$var$prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
    var decorator = /\*/.test(open);
    return {
        type: decorator ? "Decorator" : "MustacheStatement",
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function $87b575b2317f858c$var$prepareRawBlock(openRawBlock, contents, close, locInfo) {
    $87b575b2317f858c$var$validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: "Program",
        body: contents,
        strip: {},
        loc: locInfo
    };
    return {
        type: "BlockStatement",
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
    };
}
function $87b575b2317f858c$var$prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) $87b575b2317f858c$var$validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new $87b575b2317f858c$var$_exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? "DecoratorBlock" : "BlockStatement",
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function $87b575b2317f858c$var$prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: "Program",
        body: statements,
        strip: {},
        loc: loc
    };
}
function $87b575b2317f858c$var$preparePartialBlock(open, program, close, locInfo) {
    $87b575b2317f858c$var$validateClose(open, close);
    return {
        type: "PartialBlockStatement",
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}


var $1d7ee94b74691e92$var$Helpers = $1d7ee94b74691e92$var$_interopRequireWildcard($87b575b2317f858c$exports);

$1d7ee94b74691e92$export$8f49e4af10703ce3 = $1d7ee94b74691e92$var$_parser2["default"];
var $1d7ee94b74691e92$var$yy = {};
$b8fa3a450c4ca764$export$8b58be045bf06082($1d7ee94b74691e92$var$yy, $1d7ee94b74691e92$var$Helpers);
function $1d7ee94b74691e92$var$parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === "Program") return input;
    $1d7ee94b74691e92$var$_parser2["default"].yy = $1d7ee94b74691e92$var$yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    $1d7ee94b74691e92$var$yy.locInfo = function(locInfo) {
        return new $1d7ee94b74691e92$var$yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = $1d7ee94b74691e92$var$_parser2["default"].parse(input);
    return ast;
}
function $1d7ee94b74691e92$var$parse(input, options) {
    var ast = $1d7ee94b74691e92$var$parseWithoutProcessing(input, options);
    var strip = new $1d7ee94b74691e92$var$_whitespaceControl2["default"](options);
    return strip.accept(ast);
}


var $d69076f1c0b5f66a$export$1e511d4a378977f5;
var $d69076f1c0b5f66a$export$3a6335acfcf707c9;
var $d69076f1c0b5f66a$export$cfb9e0f1330f9bbd;
var $d69076f1c0b5f66a$export$ef7acd7185315e22;
/* eslint-disable new-cap */ "use strict";
$d69076f1c0b5f66a$export$1e511d4a378977f5 = true;
$d69076f1c0b5f66a$export$3a6335acfcf707c9 = $d69076f1c0b5f66a$var$Compiler;
$d69076f1c0b5f66a$export$cfb9e0f1330f9bbd = $d69076f1c0b5f66a$var$precompile;
$d69076f1c0b5f66a$export$ef7acd7185315e22 = $d69076f1c0b5f66a$var$compile;
// istanbul ignore next
function $d69076f1c0b5f66a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

var $d69076f1c0b5f66a$var$_exception2 = $d69076f1c0b5f66a$var$_interopRequireDefault($467be349c4662c93$exports);


var $d69076f1c0b5f66a$var$_ast2 = $d69076f1c0b5f66a$var$_interopRequireDefault($cfbabbe615138dca$exports);
var $d69076f1c0b5f66a$var$slice = [].slice;
function $d69076f1c0b5f66a$var$Compiler() {}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
$d69076f1c0b5f66a$var$Compiler.prototype = {
    compiler: $d69076f1c0b5f66a$var$Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !$d69076f1c0b5f66a$var$argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = $b8fa3a450c4ca764$export$8b58be045bf06082(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            "if": true,
            unless: true,
            "with": true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new $d69076f1c0b5f66a$var$_exception2["default"]("Unknown type: " + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        $d69076f1c0b5f66a$var$transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === "helper") this.helperSexpr(block, program, inverse);
        else if (type === "simple") {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode("registerDecorator", params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new $d69076f1c0b5f66a$var$_exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode("pushLiteral", "undefined");
            else params.push({
                type: "PathExpression",
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || "";
        if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
        }
        this.opcode("invokePartial", isDynamic, partialName, indent);
        this.opcode("append");
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode("appendEscaped");
        else this.opcode("append");
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode("appendContent", content.value);
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
        $d69076f1c0b5f66a$var$transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === "simple") this.simpleSexpr(sexpr);
        else if (type === "helper") this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode("getContext", path.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        path.strict = true;
        this.accept(path);
        this.opcode("invokeAmbiguous", name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
        else if (this.options.knownHelpersOnly) throw new $d69076f1c0b5f66a$var$_exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode("invokeHelper", params.length, path.original, $d69076f1c0b5f66a$var$_ast2["default"].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode("getContext", path.depth);
        var name = path.parts[0], scoped = $d69076f1c0b5f66a$var$_ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode("lookupBlockParam", blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode("pushContext");
        else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts, path.strict);
        } else this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode("pushString", string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode("pushLiteral", number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode("pushLiteral", bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function NullLiteral() {
        this.opcode("pushLiteral", "null");
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode("pushHash");
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode("assignToHash", pairs[i].key);
        this.opcode("popHash");
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: $d69076f1c0b5f66a$var$slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = $d69076f1c0b5f66a$var$_ast2["default"].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && $d69076f1c0b5f66a$var$_ast2["default"].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return "helper";
        else if (isEligible) return "ambiguous";
        else return "simple";
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || "";
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            if (val.depth) this.addDepth(val.depth);
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !$d69076f1c0b5f66a$var$_ast2["default"].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
                    this.opcode("pushId", val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode("emptyHash", omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && $b8fa3a450c4ca764$export$305f7d4e9d4624f2(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function $d69076f1c0b5f66a$var$precompile(input, options, env) {
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new $d69076f1c0b5f66a$var$_exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    options = options || {};
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function $d69076f1c0b5f66a$var$compile(input, options, env) {
    if (options === undefined) options = {};
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new $d69076f1c0b5f66a$var$_exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    options = $b8fa3a450c4ca764$export$8b58be045bf06082({}, options);
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function $d69076f1c0b5f66a$var$argEquals(a, b) {
    if (a === b) return true;
    if ($b8fa3a450c4ca764$export$43bee75e5e14138e(a) && $b8fa3a450c4ca764$export$43bee75e5e14138e(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!$d69076f1c0b5f66a$var$argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function $d69076f1c0b5f66a$var$transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: "PathExpression",
            data: false,
            depth: 0,
            parts: [
                literal.original + ""
            ],
            original: literal.original + "",
            loc: literal.loc
        };
    }
}


var $3e43a06cfaa56c81$exports = {};
"use strict";
$3e43a06cfaa56c81$exports.__esModule = true;
// istanbul ignore next
function $3e43a06cfaa56c81$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


var $3e43a06cfaa56c81$var$_exception2 = $3e43a06cfaa56c81$var$_interopRequireDefault($467be349c4662c93$exports);

var $7f44e18446f510e9$exports = {};
/* global define */ "use strict";
$7f44e18446f510e9$exports.__esModule = true;

var $7f44e18446f510e9$var$SourceNode = undefined;

try {
    /* istanbul ignore next */ if (typeof define !== "function" || !define.amd) {
        // We don't support this in AMD environments. For these environments, we asusme that
        // they are running on the browser and thus have no need for the source-map library.
        var $7f44e18446f510e9$var$SourceMap = (parcelRequire("edHs5"));
        $7f44e18446f510e9$var$SourceNode = $7f44e18446f510e9$var$SourceMap.SourceNode;
    }
} catch (err) {}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!$7f44e18446f510e9$var$SourceNode) {
    $7f44e18446f510e9$var$SourceNode = function(line, column, srcFile, chunks) {
        this.src = "";
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ $7f44e18446f510e9$var$SourceNode.prototype = {
        add: function add(chunks) {
            if ($b8fa3a450c4ca764$export$43bee75e5e14138e(chunks)) chunks = chunks.join("");
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if ($b8fa3a450c4ca764$export$43bee75e5e14138e(chunks)) chunks = chunks.join("");
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function $7f44e18446f510e9$var$castChunk(chunk, codeGen, loc) {
    if ($b8fa3a450c4ca764$export$43bee75e5e14138e(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === "boolean" || typeof chunk === "number") // Handle primitives that the SourceNode will throw up on
    return chunk + "";
    return chunk;
}
function $7f44e18446f510e9$var$CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
$7f44e18446f510e9$var$CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                "  ",
                line,
                "\n"
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {}
        };
        return new $7f44e18446f510e9$var$SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
        } : arguments[1];
        if (chunk instanceof $7f44e18446f510e9$var$SourceNode) return chunk;
        chunk = $7f44e18446f510e9$var$castChunk(chunk, this, loc);
        return new $7f44e18446f510e9$var$SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? "." + type + "(" : "(",
            params,
            ")"
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = $7f44e18446f510e9$var$castChunk(obj[key], _this);
            if (value !== "undefined") pairs.push([
                _this.quotedString(key),
                ":",
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend("{");
        ret.add("}");
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(",");
            ret.add($7f44e18446f510e9$var$castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend("[");
        ret.add("]");
        return ret;
    }
};
$7f44e18446f510e9$exports["default"] = $7f44e18446f510e9$var$CodeGen;
$7f44e18446f510e9$exports = $7f44e18446f510e9$exports["default"];


var $3e43a06cfaa56c81$var$_codeGen2 = $3e43a06cfaa56c81$var$_interopRequireDefault($7f44e18446f510e9$exports);
function $3e43a06cfaa56c81$var$Literal(value) {
    this.value = value;
}
function $3e43a06cfaa56c81$var$JavaScriptCompiler() {}
$3e43a06cfaa56c81$var$JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable("container.lookup"),
            "(depths, ",
            JSON.stringify(name),
            ")"
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = $78d876a9e9c4d43a$export$682db5a6f2fa1046, versions = $78d876a9e9c4d43a$export$534648964353ca81[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!$b8fa3a450c4ca764$export$43bee75e5e14138e(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            "return ",
            source,
            ";"
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            "buffer += ",
            source,
            ";"
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            "lookupProperty(",
            parent,
            ",",
            JSON.stringify(name),
            ")"
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource("");
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new $3e43a06cfaa56c81$var$_exception2["default"]("Compile completed with content left on stack");
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                "var decorators = container.decorators, ",
                this.lookupPropertyFunctionVarDeclaration(),
                ";\n"
            ]);
            this.decorators.push("return fn;");
            if (asObject) this.decorators = Function.apply(this, [
                "fn",
                "props",
                "container",
                "depth0",
                "data",
                "blockParams",
                "depths",
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
                this.decorators.push("}\n");
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++)if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + "_d"] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new $3e43a06cfaa56c81$var$_codeGen2["default"](this.options.srcName);
        this.decorators = new $3e43a06cfaa56c81$var$_codeGen2["default"](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = "";
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ", " + locals.join(", ");
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                node.children[0] = "alias" + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            "container",
            "depth0",
            "helpers",
            "partials",
            "data"
        ];
        if (this.useBlockParams || this.useDepths) params.push("blockParams");
        if (this.useDepths) params.push("depths");
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            "function(",
            params.join(","),
            ") {\n  ",
            source,
            "}"
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend("  + ");
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend("buffer += ");
                    bufferEnd.add(";");
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend("return ");
                bufferEnd.add(";");
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend("return buffer + ");
                bufferEnd.add(";");
            } else this.source.push("return buffer;");
        }
        if (varDeclarations) this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, "call", params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs("", 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            "if (!",
            this.lastHelper,
            ") { ",
            current,
            " = ",
            this.source.functionCall(blockHelperMissing, "call", params),
            "}"
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    " != null ? ",
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                "if (",
                local,
                " != null) { ",
                this.appendToBuffer(local, undefined, true),
                " }"
            ]);
            if (this.environment.isSimple) this.pushSource([
                "else { ",
                this.appendToBuffer("''", undefined, true),
                " }"
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable("container.escapeExpression"),
            "(",
            this.popStack(),
            ")"
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath("context", parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            "blockParams[",
            blockParamId[0],
            "][",
            blockParamId[1],
            "]"
        ]);
        this.resolvePath("context", parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral("data");
        else this.pushStackLiteral("container.data(data, " + depth + ")");
        this.resolvePath("data", parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push($3e43a06cfaa56c81$var$strictLookup(this.options.strict && strict, this, parts, type));
            return;
        }
        var len = parts.length;
        for(; i < len; i++)/* eslint-disable no-loop-func */ this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            // We want to ensure that zero and false are handled properly if the context (falsy flag)
            // needs to have the special handling for these values.
            if (!falsy) return [
                " != null ? ",
                lookup,
                " : ",
                current
            ];
            else // Otherwise we can use generic falsy handling
            return [
                " && ",
                lookup
            ];
        });
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable("container.lambda"),
            "(",
            this.popStack(),
            ", ",
            this.contextName(0),
            ")"
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== "SubExpression") {
            if (typeof string === "string") this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push("{}"); // hashIds
        if (this.stringParams) {
            this.push("{}"); // hashContexts
            this.push("{}"); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push([
            "fn = ",
            this.decorators.functionCall(foundDecorator, "", [
                "fn",
                "props",
                "container",
                options
            ]),
            " || fn;"
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
        var functionLookupCode = [
            "(",
            this.itemsSeparatedBy(possibleFunctionCalls, "||"),
            ")"
        ];
        var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, "call", helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister("helper");
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        var lookup = [
            "(",
            "(helper = ",
            helperName,
            " || ",
            nonHelper,
            ")"
        ];
        if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
        }
        this.push([
            "(",
            lookup,
            helper.paramsInit ? [
                "),(",
                helper.paramsInit
            ] : [],
            "),",
            "(typeof helper === ",
            this.aliasable('"function"'),
            " ? ",
            this.source.functionCall("helper", "call", helper.callParams),
            " : helper))"
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = "helpers";
        options.partials = "partials";
        options.decorators = "container.decorators";
        if (!isDynamic) params.unshift(this.nameLookup("partials", name, "partial"));
        else params.unshift(name);
        if (this.options.compat) options.depths = "depths";
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall("container.invokePartial", "", params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === "BlockParam") this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
        else if (type === "PathExpression") this.pushString(name);
        else if (type === "SubExpression") this.pushStackLiteral("true");
        else this.pushStackLiteral("null");
    },
    // HELPERS
    compiler: $3e43a06cfaa56c81$var$JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                this.context.programs.push(""); // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.length;
                child.index = index;
                child.name = "program" + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = "program" + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            "data",
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push("blockParams");
        if (this.useDepths) programParams.push("depths");
        return "container.program(" + programParams.join(", ") + ")";
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof $3e43a06cfaa56c81$var$Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new $3e43a06cfaa56c81$var$Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            "("
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new $3e43a06cfaa56c81$var$_exception2["default"]("replaceStack on non-inline");
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof $3e43a06cfaa56c81$var$Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                "(",
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                "((",
                this.push(_name),
                " = ",
                top,
                ")"
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ")"));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push("stack" + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return "stack" + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof $3e43a06cfaa56c81$var$Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    " = ",
                    entry,
                    ";"
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof $3e43a06cfaa56c81$var$Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new $3e43a06cfaa56c81$var$_exception2["default"]("Invalid stack pop");
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof $3e43a06cfaa56c81$var$Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return "depths[" + context + "]";
        else return "depth" + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || "container.noop";
            options.inverse = inverse || "container.noop";
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = "data";
        if (this.useBlockParams) options.blockParams = "blockParams";
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return [
                "options=",
                options
            ];
        } else if (params) {
            params.push(options);
            return "";
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
    var compilerWords = $3e43a06cfaa56c81$var$JavaScriptCompiler.RESERVED_WORDS = {};
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ $3e43a06cfaa56c81$var$JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !$3e43a06cfaa56c81$var$JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function $3e43a06cfaa56c81$var$strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(), i = 0, len = parts.length;
    if (requireTerminal) len--;
    for(; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable("container.strict"),
        "(",
        stack,
        ", ",
        compiler.quotedString(parts[i]),
        ", ",
        JSON.stringify(compiler.source.currentLocation),
        " )"
    ];
    else return stack;
}
$3e43a06cfaa56c81$exports["default"] = $3e43a06cfaa56c81$var$JavaScriptCompiler;
$3e43a06cfaa56c81$exports = $3e43a06cfaa56c81$exports["default"];


var $2090716501b0b8bd$var$_handlebarsCompilerJavascriptCompiler2 = $2090716501b0b8bd$var$_interopRequireDefault($3e43a06cfaa56c81$exports);

var $2090716501b0b8bd$var$_handlebarsCompilerVisitor2 = $2090716501b0b8bd$var$_interopRequireDefault($099a30fa67250b61$exports);

var $2090716501b0b8bd$var$_handlebarsNoConflict2 = $2090716501b0b8bd$var$_interopRequireDefault($6bfcd45083f76ec1$exports);
var $2090716501b0b8bd$var$_create = $2090716501b0b8bd$var$_handlebarsRuntime2["default"].create;
function $2090716501b0b8bd$var$create() {
    var hb = $2090716501b0b8bd$var$_create();
    hb.compile = function(input, options) {
        return $d69076f1c0b5f66a$export$ef7acd7185315e22(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return $d69076f1c0b5f66a$export$cfb9e0f1330f9bbd(input, options, hb);
    };
    hb.AST = $2090716501b0b8bd$var$_handlebarsCompilerAst2["default"];
    hb.Compiler = $d69076f1c0b5f66a$export$3a6335acfcf707c9;
    hb.JavaScriptCompiler = $2090716501b0b8bd$var$_handlebarsCompilerJavascriptCompiler2["default"];
    hb.Parser = $1d7ee94b74691e92$export$8f49e4af10703ce3;
    hb.parse = $1d7ee94b74691e92$export$98e6a39c04603d36;
    hb.parseWithoutProcessing = $1d7ee94b74691e92$export$fc85b2c4462e0bc6;
    return hb;
}
var $2090716501b0b8bd$var$inst = $2090716501b0b8bd$var$create();
$2090716501b0b8bd$var$inst.create = $2090716501b0b8bd$var$create;
$2090716501b0b8bd$var$_handlebarsNoConflict2["default"]($2090716501b0b8bd$var$inst);
$2090716501b0b8bd$var$inst.Visitor = $2090716501b0b8bd$var$_handlebarsCompilerVisitor2["default"];
$2090716501b0b8bd$var$inst["default"] = $2090716501b0b8bd$var$inst;
$2090716501b0b8bd$exports["default"] = $2090716501b0b8bd$var$inst;
$2090716501b0b8bd$exports = $2090716501b0b8bd$exports["default"];


// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */ // var local = handlebars.create();
var $827edd0b99d22e08$var$handlebars = $2090716501b0b8bd$exports.default;
var $ef2bd07e69ea0f32$export$1e511d4a378977f5;
var $ef2bd07e69ea0f32$export$c2d084dc44961371;
var $ef2bd07e69ea0f32$export$142230c39e312c23;
/* eslint-disable new-cap */ "use strict";
$ef2bd07e69ea0f32$export$1e511d4a378977f5 = true;
$ef2bd07e69ea0f32$export$c2d084dc44961371 = $ef2bd07e69ea0f32$var$print;
$ef2bd07e69ea0f32$export$142230c39e312c23 = $ef2bd07e69ea0f32$var$PrintVisitor;
// istanbul ignore next
function $ef2bd07e69ea0f32$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

var $ef2bd07e69ea0f32$var$_visitor2 = $ef2bd07e69ea0f32$var$_interopRequireDefault($099a30fa67250b61$exports);
function $ef2bd07e69ea0f32$var$print(ast) {
    return new $ef2bd07e69ea0f32$var$PrintVisitor().accept(ast);
}
function $ef2bd07e69ea0f32$var$PrintVisitor() {
    this.padding = 0;
}
$ef2bd07e69ea0f32$var$PrintVisitor.prototype = new $ef2bd07e69ea0f32$var$_visitor2["default"]();
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.pad = function(string) {
    var out = "";
    for(var i = 0, l = this.padding; i < l; i++)out += "  ";
    out += string + "\n";
    return out;
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.Program = function(program) {
    var out = "", body = program.body, i = undefined, l = undefined;
    if (program.blockParams) {
        var blockParams = "BLOCK PARAMS: [";
        for(i = 0, l = program.blockParams.length; i < l; i++)blockParams += " " + program.blockParams[i];
        blockParams += " ]";
        out += this.pad(blockParams);
    }
    for(i = 0, l = body.length; i < l; i++)out += this.accept(body[i]);
    this.padding--;
    return out;
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.MustacheStatement = function(mustache) {
    return this.pad("{{ " + this.SubExpression(mustache) + " }}");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.Decorator = function(mustache) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(mustache) + " }}");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.BlockStatement = $ef2bd07e69ea0f32$var$PrintVisitor.prototype.DecoratorBlock = function(block) {
    var out = "";
    out += this.pad((block.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:");
    this.padding++;
    out += this.pad(this.SubExpression(block));
    if (block.program) {
        out += this.pad("PROGRAM:");
        this.padding++;
        out += this.accept(block.program);
        this.padding--;
    }
    if (block.inverse) {
        if (block.program) this.padding++;
        out += this.pad("{{^}}");
        this.padding++;
        out += this.accept(block.inverse);
        this.padding--;
        if (block.program) this.padding--;
    }
    this.padding--;
    return out;
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.PartialStatement = function(partial) {
    var content = "PARTIAL:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    return this.pad("{{> " + content + " }}");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.PartialBlockStatement = function(partial) {
    var content = "PARTIAL BLOCK:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    content += " " + this.pad("PROGRAM:");
    this.padding++;
    content += this.accept(partial.program);
    this.padding--;
    return this.pad("{{> " + content + " }}");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.ContentStatement = function(content) {
    return this.pad("CONTENT[ '" + content.value + "' ]");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.CommentStatement = function(comment) {
    return this.pad("{{! '" + comment.value + "' }}");
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.SubExpression = function(sexpr) {
    var params = sexpr.params, paramStrings = [], hash = undefined;
    for(var i = 0, l = params.length; i < l; i++)paramStrings.push(this.accept(params[i]));
    params = "[" + paramStrings.join(", ") + "]";
    hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";
    return this.accept(sexpr.path) + " " + params + hash;
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.PathExpression = function(id) {
    var path = id.parts.join("/");
    return (id.data ? "@" : "") + "PATH:" + path;
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.StringLiteral = function(string) {
    return '"' + string.value + '"';
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.NumberLiteral = function(number) {
    return "NUMBER{" + number.value + "}";
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.BooleanLiteral = function(bool) {
    return "BOOLEAN{" + bool.value + "}";
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.NullLiteral = function() {
    return "NULL";
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.Hash = function(hash) {
    var pairs = hash.pairs, joinedPairs = [];
    for(var i = 0, l = pairs.length; i < l; i++)joinedPairs.push(this.accept(pairs[i]));
    return "HASH{" + joinedPairs.join(", ") + "}";
};
$ef2bd07e69ea0f32$var$PrintVisitor.prototype.HashPair = function(pair) {
    return pair.key + "=" + this.accept(pair.value);
}; /* eslint-enable new-cap */ 


$827edd0b99d22e08$var$handlebars.PrintVisitor = $ef2bd07e69ea0f32$export$142230c39e312c23;
$827edd0b99d22e08$var$handlebars.print = $ef2bd07e69ea0f32$export$c2d084dc44961371;
$827edd0b99d22e08$exports = $827edd0b99d22e08$var$handlebars;

// Publish a Node.js require() handler for .handlebars and .hbs files
function $827edd0b99d22e08$var$extension(module1, filename) {
    var fs = (parcelRequire("d3V3O"));
    var templateString = fs.readFileSync(filename, "utf8");
    module1.exports = $827edd0b99d22e08$var$handlebars.compile(templateString);
}
/* istanbul ignore else */ if (undefined) {
    undefined[".handlebars"] = $827edd0b99d22e08$var$extension;
    undefined[".hbs"] = $827edd0b99d22e08$var$extension;
}


function $374963e531273dbe$export$2e2bcd8739ae039(Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($827edd0b99d22e08$exports))).registerHelper(Component.componentName || Component.name, function({ hash: { ref: ref , ...hash } , data: data , fn: fn  }) {
        if (!data.root.children) data.root.children = {};
        if (!data.root.refs) data.root.refs = {};
        const { children: children , refs: refs  } = data.root /**
       * Костыль для того, чтобы передавать переменные
       * внутрь блоков вручную подменяя значение
       */ ;
        Object.keys(hash).forEach((key)=>{
            if (this[key] && typeof this[key] === "string") hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}}`, "i"), this[key]);
        });
        const component = new Component(hash);
        children[component.id] = component;
        if (ref) refs[ref] = component;
        const contents = fn ? fn(this) : "";
        return `<div data-id="${component.id}">${contents}</div>`;
    });
}


function $6c8cc3259de8e17b$export$2e2bcd8739ae039(block) {
    const root = document.querySelector("#app");
    root.innerHTML = "";
    root.appendChild(block.getContent());
}


class $f921d63a1c92a5fb$export$2e2bcd8739ae039 {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}



let $482cc74338e700d4$export$4385e60b38654f68 = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let $482cc74338e700d4$export$a5cee9e955a615e5 = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let $482cc74338e700d4$export$62e99e5c9f473d7f = (alphabet, size = 21)=>$482cc74338e700d4$export$a5cee9e955a615e5(alphabet, size, $482cc74338e700d4$export$4385e60b38654f68);
let $482cc74338e700d4$export$ac4959f4f1338dfc = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");



class $9654315c65fc281a$export$2e2bcd8739ae039 {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    id = (0, $482cc74338e700d4$export$ac4959f4f1338dfc)(6);
    _element = null;
    children = {};
    state = {};
    refs = {};
    constructor(props){
        const eventBus = new (0, $f921d63a1c92a5fb$export$2e2bcd8739ae039)();
        this._meta = {
            props: props
        };
        this.getStateFromProps(props);
        this.props = this._makePropsProxy(props || {});
        this.state = this._makePropsProxy(this.state);
        this.eventBus = ()=>eventBus;
        this._registerEvents(eventBus);
        eventBus.emit($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.INIT, this.props);
    }
    _registerEvents(eventBus) {
        eventBus.on($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.INIT, this.init.bind(this));
        eventBus.on($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        this._element = this._createDocumentElement("div");
    }
    getStateFromProps(props) {
        this.state = {};
    }
    init() {
        this._createResources();
        this.eventBus().emit($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_RENDER, this.props);
    }
    _componentDidMount(props) {
        this.componentDidMount(props);
    }
    componentDidMount(props) {}
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) return;
        this._render();
    }
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
    setProps = (nextProps)=>{
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    };
    setState = (nextState)=>{
        if (!nextState) return;
        Object.assign(this.state, nextState);
    };
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this._compile();
        this._removeEvents();
        const newElement = fragment.firstElementChild;
        this._element.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }
    render() {
        return "";
    }
    getContent() {
        // Хак, чтобы вызвать CDM только после добавления в DOM
        if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) setTimeout(()=>{
            if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) this.eventBus().emit($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_CDM);
        }, 100);
        return this.element;
    }
    _makePropsProxy = (props)=>{
        let waitProxy = false;
        return new Proxy(props, {
            get (target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target, prop, value)=>{
                if (typeof target[prop] !== "undefined" && value === target[prop]) return true;
                target[prop] = value;
                if (!waitProxy) {
                    waitProxy = true;
                    setTimeout(()=>{
                        this.eventBus().emit($9654315c65fc281a$export$2e2bcd8739ae039.EVENTS.FLOW_CDU, {
                            ...target
                        }, target);
                        waitProxy = false;
                    }, 10);
                }
                return true;
            },
            deleteProperty () {
                throw new Error("Нет доступа");
            }
        });
    };
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    _removeEvents() {
        const events = this.props.events;
        if (!events || !this._element) return;
        Object.entries(events).forEach(([event, listener])=>{
            this._element.removeEventListener(event, listener);
        });
    }
    _addEvents() {
        const events = this.props.events;
        if (!events) return;
        Object.entries(events).forEach(([event, listener])=>{
            this._element.addEventListener(event, listener);
        });
    }
    _compile() {
        const fragment = document.createElement("template");
        /**
     * Рендерим шаблон
     */ const template = (0, (/*@__PURE__*/$parcel$interopDefault($827edd0b99d22e08$exports))).compile(this.render());
        fragment.innerHTML = template({
            ...this.state,
            ...this.props,
            children: this.children,
            refs: this.refs
        });
        /**
     * Заменяем заглушки на компоненты
     */ Object.entries(this.children).forEach(([id, component])=>{
            /**
       * Ищем заглушку по id
       */ const stub = fragment.content.querySelector(`[data-id="${id}"]`);
            if (!stub) return;
            const stubChilds = stub.childNodes.length ? stub.childNodes : [];
            /**
       * Заменяем заглушку на component._element
       */ const content = component.getContent();
            stub.replaceWith(content);
            /**
       * Ищем элемент layout-а, куда вставлять детей
       */ const layoutContent = content.querySelector("[data-layout='1']");
            if (layoutContent && stubChilds.length) layoutContent.append(...stubChilds);
        });
        /**
     * Возвращаем фрагмент
     */ return fragment.content;
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}


class $eb04f011822db60d$export$8d4b08240fd1e0d {
    routes = {};
    isStarted = false;
    start() {
        if (!this.isStarted) {
            this.isStarted = true;
            window.onpopstate = (event)=>{
                this.onRouteChange.call(this);
            };
            this.onRouteChange();
        }
    }
    onRouteChange(pathname = window.location.pathname) {
        const found = Object.entries(this.routes).some(([routeHash, callback])=>{
            if (routeHash === pathname) {
                callback();
                return true;
            }
            return false;
        });
        if (!found && this.routes["*"]) this.routes["*"]();
    }
    use(pathname, callback) {
        this.routes[pathname] = callback;
        return this;
    }
    go(pathname) {
        window.history.pushState({}, "", pathname);
        this.onRouteChange(pathname);
    }
    back() {
        window.history.back();
    }
    forward() {
        window.history.forward();
    }
}



class $70e35aadc369705a$export$390f32400eaf98c9 extends (0, $f921d63a1c92a5fb$export$2e2bcd8739ae039) {
    state = {};
    constructor(defaultState){
        super();
        this.state = defaultState;
        this.set(defaultState);
    }
    getState() {
        return this.state;
    }
    set(nextState) {
        const prevState = {
            ...this.state
        };
        this.state = {
            ...this.state,
            ...nextState
        };
        console.log("NEXT STATE--------------", prevState, nextState);
        this.emit("changed", prevState, nextState);
    }
    dispatch(nextStateOrAction, payload) {
        if (typeof nextStateOrAction === "function") {
            console.log("PAYLOAD", payload);
            nextStateOrAction(this.dispatch.bind(this), this.state, payload);
        } else this.set({
            ...this.state,
            ...nextStateOrAction
        });
    }
}






function $bf54245ddd4ee254$var$objToString(obj) {
    let objString = "";
    const recursion = (obj1)=>{
        Object.entries(obj1).map(([key, value])=>{
            if (typeof obj1[key] === "object") {
                objString = `${objString}[${key}]`;
                return recursion(obj1[key]);
            }
            return objString = `${objString}[${key}]=${value}`;
        });
    };
    recursion(obj);
    return objString;
}
function $bf54245ddd4ee254$export$160057b430cb5a30(data) {
    if (typeof data !== "object") throw new Error("input must be an object");
    return `${Object.entries(data).map(([key, val])=>{
        if (Array.isArray(val)) return val.reduce((acc, value, index)=>{
            if (index + 1 === val.length) return acc = `${acc}${key}[${index}]=${value}`;
            return acc = `${acc}${key}[${index}]=${value}&`;
        }, "");
        if (typeof val === "object") return `${key}${$bf54245ddd4ee254$var$objToString(val)}`;
        return `${key}=${val}`;
    }).join("&")}`;
}
var $bf54245ddd4ee254$export$2e2bcd8739ae039 = $bf54245ddd4ee254$export$160057b430cb5a30;


let $d5cba6aa0bd8a776$export$7699f7ca8780a690;
(function(ValidateType) {
    ValidateType["Login"] = "login";
    ValidateType["Password"] = "password";
    ValidateType["NewPassword"] = "newPassword";
    ValidateType["OldPassword"] = "oldPassword";
    ValidateType["CheckPassword"] = "check_password";
    ValidateType["FirstName"] = "first_name";
    ValidateType["SecondName"] = "second_name";
    ValidateType["Email"] = "email";
    ValidateType["Phone"] = "phone";
    ValidateType["DisplayName"] = "display_name";
    ValidateType["Message"] = "message";
})($d5cba6aa0bd8a776$export$7699f7ca8780a690 || ($d5cba6aa0bd8a776$export$7699f7ca8780a690 = {}));
function $d5cba6aa0bd8a776$export$ed692cabb252e59b(rules) {
    let errorMessage = {
        text: "",
        inputName: ""
    };
    for(let i = 0; i < rules.length; i++){
        const { type: type , value: value  } = rules[i];
        //Ниже я сделал именно через "название типа" , потому что в том же onBlur можно просто указать type:inputEl.name, вместо поиска нужного типа через условия
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.Login) {
            errorMessage.inputName = "loginInputRef";
            if (value.length === 0) {
                errorMessage.text = "Логин не может быть пустым";
                break;
            } else if (value.length < 3) {
                errorMessage.text = "Логин должен содержать от 3 символов";
                break;
            } else if (value.length > 20) {
                errorMessage.text = "Логин должен содержать до 20 символов";
                break;
            } else if (!value.match(/[a-zA-Zа-я]+/g)) {
                errorMessage.text = "Логин не может содержать только цифры";
                break;
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Логин не может содержать пробелы";
                break;
            } else if (value.match(/[а-я]/g)) {
                errorMessage.text = "Логин должен содержать только латинские символы";
                break;
            } else if (!value.match(/^[a-zA-Z0-9-_]{3,20}$/g)) {
                errorMessage.text = "Логин не должен содержать специальные символы";
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.Password || type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.NewPassword || type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.OldPassword || type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.CheckPassword) {
            errorMessage.inputName = `${type}InputRef`;
            if (value.length === 0) {
                errorMessage.text = "Пароль не может быть пустым";
                break;
            } else if (value.length < 7) {
                errorMessage.text = "Пароль должен содержать от 8 символов";
                break;
            } else if (value.length > 40) {
                errorMessage.text = "Пароль должен содержать до 40 символов";
                break;
            } else if (!value.match(/\d+/g)) {
                errorMessage.text = "Пароль должен содержать хотя бы одну цифру";
                break;
            } else if (!value.match(/[A-ZА-Я]+/g)) {
                errorMessage.text = "Пароль должен содержать хотя бы заглавную букву";
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.FirstName || type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.SecondName) {
            errorMessage.inputName = `${type}InputRef`;
            const nameForText = type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.FirstName ? "Имя" : "Фамилия";
            if (value.length === 0) {
                errorMessage.text = `${nameForText} не может быть ${nameForText === "Имя" ? "пустым" : "пустой"}`;
                break;
            } else if (!value.match(/^[A-ZА-Я]/g)) {
                errorMessage.text = "Первая буква должна быть заглавной";
                break;
            } else if (value.match(/\d+/g)) {
                errorMessage.text = "Пожалуйста, уберите цифры";
                break;
            } else if (value.match(/\s/g)) {
                errorMessage.text = `${nameForText} не может содержать пробелы`;
                break;
            } else if (!value.match(/^[a-zA-ZА-Яа-я0-9-]{0,}$/g)) {
                errorMessage.text = `${nameForText} не может содержать специальные символы`;
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.Email) {
            errorMessage.inputName = "emailInputRef";
            if (value.length === 0) {
                errorMessage.text = "Почта не может быть пустой";
                break;
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Почта не может содержать пробелы";
                break;
            } else if (value.match(/[а-я]/g)) {
                errorMessage.text = "Почта должен содержать только латинские символы";
                break;
            } else if (!value.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
                errorMessage.text = "Почта не должна содержать специальные символы";
                break;
            } else if (!value.match(/[@]/g)) {
                errorMessage.text = "В почте должен быть символ @";
                break;
            } else if (!value.match(/[.]/g)) {
                errorMessage.text = "В почте должна быть точка";
                break;
            } else if (value.match(/[.]/g) && !value.match(/\w+[.]\w+/g)) {
                errorMessage.text = "Перед точкой и после нее должны быть символы ";
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.Phone) {
            errorMessage.inputName = "phoneInputRef";
            if (value.length === 0) {
                errorMessage.text = "Номер телефона не может быть пустым";
                break;
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Номер телефона не может содержать пробелы";
                break;
            } else if (value.match(/[A-Za-zА-Яа-я]+/g)) {
                errorMessage.text = "Номер телефона не может содержать буквы";
                break;
            } else if (!value.match(/^[+]7/)) {
                errorMessage.text = "Номер телефона должен начинаться с +7";
                break;
            } else if (value.length < 10) {
                errorMessage.text = "Номер телефона должен содержать от 10 символов";
                break;
            } else if (value.length > 15) {
                errorMessage.text = "Номер телефона должен содержать до 15 символов";
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.DisplayName) {
            errorMessage.inputName = "display_nameInputRef";
            if (value.length === 0) {
                errorMessage.text = "Имя в чате не может быть пустым";
                break;
            }
        }
        if (type === $d5cba6aa0bd8a776$export$7699f7ca8780a690.Message) {
            errorMessage.inputName = "messageInputRef";
            if (value.length === 0) {
                errorMessage.text = "Сообщение не может быть пустым";
                break;
            }
        }
    }
    return errorMessage;
}


function $4cb14a8771ecdce6$export$c605750379d8bc00(WrappedBlock, mapStateToProps) {
    // @ts-expect-error No base constructor has the specified
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName;
        constructor(props){
            super({
                ...props,
                store: mapStateToProps ? mapStateToProps(window.store.getState()) : window.store
            });
        }
        __onChangeStoreCallback = ()=>{
            /**
       * TODO: проверить что стор реально обновлен
       * и прокидывать не целый стор, а необходимые поля
       * с помощью метода mapStateToProps
       */ // @ts-expect-error this is not typed
            this.setProps({
                ...this.props,
                store: mapStateToProps ? mapStateToProps(window.store.getState()) : window.store
            });
        };
        componentDidMount(props) {
            super.componentDidMount(props);
            window.store.on("changed", this.__onChangeStoreCallback);
        }
        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off("changed", this.__onChangeStoreCallback);
        }
    };
}


function $8b2c807fc48699cd$export$9d43a29426bbda85(WrappedBlock) {
    // @ts-expect-error No base constructor has the specified
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName || WrappedBlock.name;
        constructor(props){
            super({
                ...props,
                contacts: window.store.getState().contacts
            });
        }
        __onChangeUserCallback = (prevState, nextState)=>{
            if (JSON.stringify(prevState.contacts) !== JSON.stringify(nextState.contacts)) // @ts-expect-error this is not typed
            this.setProps({
                ...this.props,
                contacts: nextState.contacts
            });
        };
        componentDidMount(props) {
            super.componentDidMount(props);
            window.store.on("changed", this.__onChangeUserCallback);
        }
        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off("changed", this.__onChangeUserCallback);
        }
    };
}


function $77eeb8d2c47f9696$export$186e7271a5553fd7(WrappedBlock) {
    // @ts-expect-error No base constructor has the specified
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName || WrappedBlock.name;
        constructor(props){
            super({
                ...props,
                user: window.store.getState().user
            });
        }
        __onChangeUserCallback = (prevState, nextState)=>{
            if (JSON.stringify(prevState.user) !== JSON.stringify(nextState.user)) {
                console.log("USER CHANGED");
                // @ts-expect-error this is not typed
                this.setProps({
                    ...this.props,
                    user: nextState.user
                });
            }
        };
        componentDidMount(props) {
            super.componentDidMount(props);
            window.store.on("changed", this.__onChangeUserCallback);
        }
        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off("changed", this.__onChangeUserCallback);
        }
    };
}


function $34a895a60f8f63d4$export$369b6b2b30582e8e(WrappedBlock) {
    // @ts-expect-error No base constructor has the specified number of type arguments
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName || WrappedBlock.name;
        constructor(props){
            super({
                ...props,
                router: window.router
            });
        }
    };
}


const $1fd43d9c112668c3$export$88dcd5c1adae8021 = (data)=>{
    return {
        id: data.id,
        login: data.login,
        firstName: data.first_name,
        secondName: data.second_name,
        displayName: data.display_name,
        avatar: data.avatar,
        phone: data.phone,
        email: data.email,
        fromSearch: data.fromSearch
    };
};


function $e37ba36a6a1abdd9$export$5e63894f961a3223(response) {
    return response && response.reason;
}





const $88b977da1f221345$export$cd891b82501bb412 = {
    Login: "/",
    SignUp: "/sign-up",
    Chat: "/messenger",
    Profile: "/profile",
    ProfileSettings: "/settings",
    ChangePassword: "/change-password",
    NotFound: "/not-found"
};




let $d32ca8009394484b$var$Method;
(function(Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["PATCH"] = "PATCH";
    Method["DELETE"] = "DELETE";
})($d32ca8009394484b$var$Method || ($d32ca8009394484b$var$Method = {}));
class $d32ca8009394484b$export$5767f363d4830f89 {
    static getInstance() {
        if (!this._instance) this._instance = new $d32ca8009394484b$export$5767f363d4830f89("https://ya-praktikum.tech/api/v2");
        return this._instance;
    }
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    get = (path, options = {})=>{
        if (options.data) return this.request(`${path}${(0, $bf54245ddd4ee254$export$160057b430cb5a30)(options.data)}`, {
            ...options,
            method: $d32ca8009394484b$var$Method.GET
        }, options.timeout);
        return this.request(path, {
            ...options,
            method: $d32ca8009394484b$var$Method.GET
        }, options.timeout);
    };
    post = (path, options = {})=>{
        return this.request(path, {
            ...options,
            method: $d32ca8009394484b$var$Method.POST
        }, options.timeout);
    };
    put = (path, options = {})=>{
        return this.request(path, {
            ...options,
            method: $d32ca8009394484b$var$Method.PUT
        }, options.timeout);
    };
    delete = (path, options = {})=>{
        return this.request(path, {
            ...options,
            method: $d32ca8009394484b$var$Method.DELETE
        }, options.timeout);
    };
    request(path, options = {
        method: $d32ca8009394484b$var$Method.GET
    }, timeout = 0) {
        const { headers: headers = {} , includeCredentials: includeCredentials = true , method: method , data: data  } = options;
        const url = this.baseUrl + path;
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.withCredentials = includeCredentials;
            Object.keys(headers).forEach((key)=>{
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.onload = function() {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;
            if (method === $d32ca8009394484b$var$Method.GET || !data) xhr.send();
            else xhr.send(data);
        });
    }
}


const $acfbc1c54750817e$export$39813f5a3cc2bc5a = {
    signIn: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post("/auth/signin", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        if (res.status !== 200) return JSON.parse(res.responseText);
        return res;
    },
    signUp: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post("/auth/signup", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return true;
    },
    logout: async ()=>{
        console.log("Logout successfully developed");
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post("/auth/logout", {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
    },
    getUser: async ()=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().get("/auth/user", {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        //TODO: тест вариант
        if (res.status !== 200) {
            if (window.location.pathname !== (0, $88b977da1f221345$export$cd891b82501bb412).SignUp && window.location.pathname !== (0, $88b977da1f221345$export$cd891b82501bb412).Login) window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Login);
            throw Error(JSON.parse(res.responseText).reason);
        }
        return JSON.parse(res.response);
    }
};




const $48a283f03ade70fa$export$596d806903d1f59e = async (dispatch, state, action)=>{
    dispatch({
        isLoading: true
    });
    const response = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).signIn(action);
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch({
            isLoading: false,
            formError: response.reason
        });
        return;
    }
    const responseUser = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).getUser();
    dispatch({
        isLoading: false,
        formError: null
    });
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch($48a283f03ade70fa$export$a0973bcfe11b05c9);
        return;
    }
    dispatch({
        user: (0, $1fd43d9c112668c3$export$88dcd5c1adae8021)(responseUser)
    });
    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Chat);
};
const $48a283f03ade70fa$export$cf64224bcd829024 = async (dispatch, state, action)=>{
    dispatch({
        isLoading: true
    });
    const response = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).signUp(action);
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch({
            isLoading: false,
            formError: response.reason
        });
        return;
    }
    const responseUser = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).getUser();
    dispatch({
        isLoading: false,
        formError: null
    });
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch($48a283f03ade70fa$export$a0973bcfe11b05c9);
        return;
    }
    dispatch({
        user: (0, $1fd43d9c112668c3$export$88dcd5c1adae8021)(responseUser)
    });
    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Chat);
};
const $48a283f03ade70fa$export$a0973bcfe11b05c9 = async (dispatch)=>{
    dispatch({
        isLoading: true
    });
    await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).logout();
    dispatch({
        isLoading: false,
        user: null
    });
    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Login);
};



class $08966ababee588cf$var$LoginPage extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            loginValue: "",
            passwordValue: "",
            formError: ()=>this.props.store.getState().formError,
            onInput: (e)=>{
                const inputEl = e.target;
                const inputRef = inputEl.name + "InputRef";
                const errorRef = inputEl.name + "ErrorRef";
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: inputEl.name,
                        value: inputEl.value
                    }
                ]);
                this.refs[inputRef].refs[errorRef].setProps({
                    text: errorMessage.text
                });
            },
            onRedirectToSignUp: ()=>{
                window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).SignUp);
            },
            onSubmit: ()=>{
                const loginEl = this.element?.querySelector("input[name='login']");
                const passwordEl = this.element?.querySelector("input[name='password']");
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: (0, $d5cba6aa0bd8a776$export$7699f7ca8780a690).Login,
                        value: loginEl.value
                    },
                    {
                        type: (0, $d5cba6aa0bd8a776$export$7699f7ca8780a690).Password,
                        value: passwordEl.value
                    }, 
                ]);
                if (errorMessage.text) this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
                    text: errorMessage.text
                });
                else {
                    this.setProps({
                        ...this.props,
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value
                    });
                    const formData = {
                        login: loginEl.value,
                        password: passwordEl.value
                    };
                    console.log("Форма готова к отправке, данные: ", formData);
                    //   authAPI.signIn(formData).then((res) => {
                    //     if (!res) {
                    //       this.refs["passwordInputRef"].refs["passwordErrorRef"].setProps({
                    //         text: "Логин или пароль неверны",
                    //       })
                    //     }
                    //     this.initUser()
                    //   })
                    this.props.store.dispatch((0, $48a283f03ade70fa$export$596d806903d1f59e), formData);
                }
            }
        });
    }
    render() {
        // language=hbs
        return `
    <main class="login">
      <div class="login__container">
      {{{Title title="Привет!" subtitle="Давно тебя не видели!" }}}
          <form class="login__form">
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="login"
            value=loginValue
            inputClassName="custom-input"
            divClassName="first"
            placeholder="Ваш логин"
            ref="loginInputRef"
            errorRef="loginErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="password" 
            value=passwordValue
            inputClassName="custom-input"
            divClassName="last"
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
          {{{ErrorFromServer text=formError className="white"}}}
          {{{Button text="Войти" className="custom-button" onClick=onSubmit }}}
          </form>
          {{{Button text="Нет аккаунта?" className="redirect-button" onClick=onRedirectToSignUp}}}
      </div>
    </main>
    `;
    }
}
const $08966ababee588cf$export$f14c0e3f98d164c0 = (0, $34a895a60f8f63d4$export$369b6b2b30582e8e)((0, $4cb14a8771ecdce6$export$c605750379d8bc00)((0, $77eeb8d2c47f9696$export$186e7271a5553fd7)($08966ababee588cf$var$LoginPage)));







var $7b8faa819810a1b0$exports = {};

$7b8faa819810a1b0$exports = new URL((parcelRequire("dWyTn")).resolve("7v5Ne"), import.meta.url).toString();





class $d4ff0f3b3dffba08$var$SignUpPage extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            emailValue: "",
            loginValue: "",
            passwordValue: "",
            firstNameValue: "",
            secondNameValue: "",
            phoneValue: "",
            checkPasswordValue: "",
            onInput: (e)=>{
                const inputEl = e.target;
                const inputRef = inputEl.name + "InputRef";
                const errorRef = inputEl.name + "ErrorRef";
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: inputEl.name,
                        value: String(inputEl.value)
                    }
                ]);
                this.refs[inputRef].refs[errorRef].setProps({
                    text: errorMessage.text
                });
            },
            onRedirectToLogin: ()=>{
                window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Login);
            },
            onSubmit: ()=>{
                //Названия элементов для последующего маппинга в { name:имя(отсюда как раз), element: элемент }
                const arrayOfInputsName = [
                    "email",
                    "login",
                    "first_name",
                    "second_name",
                    "phone",
                    "password",
                    "check_password"
                ];
                //Сам маппинг
                const arrayOfHtmlElements = arrayOfInputsName.map((name)=>{
                    return {
                        name: name,
                        element: this.element?.querySelector(`input[name="${name}"]`)
                    };
                });
                //Проверяем наличие ошибок(Маппинг помогает упростить запрос)
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)(arrayOfHtmlElements.map((item)=>{
                    return {
                        type: item.element.name,
                        value: item.element.value
                    };
                }));
                //Если ошибка есть - находим нужный элемент в refs, далее реф его ошибки, далее меняем текст на текст ошибки
                if (errorMessage.text) this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
                    text: errorMessage.text
                });
                else //Если поля с паролями не совпадают, выдаем ошибку , если все ок - отправляем форму
                if (arrayOfHtmlElements[5].element.value !== arrayOfHtmlElements[6].element.value) this.refs["check_passwordInputRef"].refs["check_passwordErrorRef"].setProps({
                    text: "Пароли не совпадают"
                });
                else {
                    this.setProps({
                        ...props,
                        emailValue: arrayOfHtmlElements[0].element.value,
                        loginValue: arrayOfHtmlElements[1].element.value,
                        firstNameValue: arrayOfHtmlElements[2].element.value,
                        secondNameValue: arrayOfHtmlElements[3].element.value,
                        phoneValue: arrayOfHtmlElements[4].element.value,
                        passwordValue: arrayOfHtmlElements[5].element.value,
                        checkPasswordValue: arrayOfHtmlElements[6].element.value
                    });
                    const formData = arrayOfHtmlElements.filter(({ name: name  })=>name !== "check_password").reduce((acc, item)=>Object.assign(acc, {
                            [item.name]: item.element.value
                        }), {});
                    formData["avatar"] = $7b8faa819810a1b0$exports;
                    console.log("Форма готова к отправке, данные: ", formData);
                    this.props.store.dispatch((0, $48a283f03ade70fa$export$cf64224bcd829024), formData);
                }
            }
        });
    }
    render() {
        // language=hbs
        return `
    <main class="signUp">
      <div class="signUp__container">
        {{{Title title="Пора познакомиться!" subtitle="Будем рады видеть тебя в нашем приложении" }}}
          <form class="signUp__form">
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="email" 
            value=emailValue
            inputClassName="custom-input short"
            divClassName="short first-short"
            placeholder="Почта"
            ref="emailInputRef"
            errorRef="emailErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="login"
            value=loginValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Логин"
            ref="loginInputRef"
            errorRef="loginErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="first_name"
            value=firstNameValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Имя"
            ref="first_nameInputRef"
            errorRef="first_nameErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="second_name"
            value=secondNameValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Фамилия"
            ref="second_nameInputRef"
            errorRef="second_nameErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="phone"
            value=phoneValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Телефон"
            ref="phoneInputRef"
            errorRef="phoneErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="password" 
            name="password"
            value=passwordValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="password" 
            name="check_password"
            value=checkPasswordValue 
            inputClassName="custom-input short"
            divClassName="short last-short"
            placeholder="Повторите пароль"
            ref="check_passwordInputRef"
            errorRef="check_passwordErrorRef"
          }}}
            {{{Button text="Зарегистрироваться" className="custom-button" onClick=onSubmit}}}
          </form>
          {{{Button text="Войти" className="redirect-button" onClick=onRedirectToLogin}}}

      </div>
    </main>
    `;
    }
}
const $d4ff0f3b3dffba08$export$265471dcab9022d3 = (0, $34a895a60f8f63d4$export$369b6b2b30582e8e)((0, $4cb14a8771ecdce6$export$c605750379d8bc00)((0, $77eeb8d2c47f9696$export$186e7271a5553fd7)($d4ff0f3b3dffba08$var$SignUpPage)));






function $f567a0b93f9fb86a$export$570a1526675f2c4b(WrappedBlock) {
    // @ts-expect-error No base constructor has the specified
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName || WrappedBlock.name;
        constructor(props){
            super({
                ...props,
                currentChat: window.store.getState().currentChat
            });
        }
        __onChangeCurrentChatCallback = (prevState, nextState)=>{
            if (JSON.stringify(prevState.currentChat) !== JSON.stringify(nextState.currentChat)) // @ts-expect-error this is not typed
            this.setProps({
                ...this.props,
                currentChat: nextState.currentChat
            });
        };
        componentDidMount(props) {
            super.componentDidMount(props);
            window.store.on("changed", this.__onChangeCurrentChatCallback);
        }
        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off("changed", this.__onChangeCurrentChatCallback);
        }
    };
}



const $76ab1306601d6176$export$4cb3a1b274fdb0b1 = {
    getChats: async ()=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().get("/chats", {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return JSON.parse(res.responseText);
    },
    getChatByTitle: async (title)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().get(`/chats?title=${title}`, {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return JSON.parse(res.responseText);
    },
    getChatUsers: async (chatId)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().get(`/chats/${chatId}/users`, {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return JSON.parse(res.responseText);
    },
    createChat: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post("/chats", {
            includeCredentials: true,
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            data: JSON.stringify(data)
        });
        console.log(res);
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return JSON.parse(res.responseText);
    },
    deleteChat: async (chatId)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().delete("/chats", {
            includeCredentials: true,
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            data: JSON.stringify({
                chatId: chatId
            })
        });
        console.log(res);
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return true;
    },
    addUserToChat: async (userId, chatId)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/chats/users", {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            },
            data: JSON.stringify({
                users: [
                    userId
                ],
                chatId: chatId
            })
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
    },
    getToken: async (chatId)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post(`/chats/token/${chatId}`, {
            includeCredentials: true,
            headers: {
                accept: "application/json"
            }
        });
        if (res.status !== 200) throw Error(JSON.parse(res.responseText).reason);
        return JSON.parse(res.responseText).token;
    },
    changeAvatar: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/chats/avatar", {
            includeCredentials: true,
            data: data
        });
        console.log(data, res);
        return JSON.parse(res.responseText);
    }
};



class $626b24686b57d8cb$export$2e2bcd8739ae039 {
    static EVENTS = {
        WS_MESSAGES_ARRIVED: "ws-messages-arrived"
    };
    isGettingOldMessages = false;
    static WS_EVENTS = {
        PING: "ping",
        PONG: "pong",
        USER_CONNECTED: "user connected",
        GET_OLD: "get old",
        MESSAGE: "message"
    };
    static SERVICE_MESSAGE_TYPES = [
        $626b24686b57d8cb$export$2e2bcd8739ae039.WS_EVENTS.USER_CONNECTED,
        $626b24686b57d8cb$export$2e2bcd8739ae039.WS_EVENTS.PONG, 
    ];
    keepWSConnection = false;
    constructor(user, chatId, token){
        this.user = user;
        this.eventBus = new (0, $f921d63a1c92a5fb$export$2e2bcd8739ae039)();
        this._socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user?.id}/${chatId}/${token}`);
        this._onOpen();
        this._onMessage();
        this._onError();
        this._onClose();
    }
    start() {
        this.keepWSConnection = true;
        this.startPingingSocket();
    }
    stop() {
        this.keepWSConnection = false;
    }
    send(message) {
        console.log(message);
        this._socket.send(JSON.stringify({
            content: message,
            type: $626b24686b57d8cb$export$2e2bcd8739ae039.WS_EVENTS.MESSAGE
        }));
    }
    startPingingSocket(timeout = 1000) {
        setTimeout(()=>{
            this._socket.send(JSON.stringify({
                type: $626b24686b57d8cb$export$2e2bcd8739ae039.WS_EVENTS.PING
            }));
            if (this.keepWSConnection) this.startPingingSocket();
        }, timeout);
    }
    getOldMessages(page = "0") {
        console.log("Get messages request");
        this.isGettingOldMessages = true;
        this._socket.send(JSON.stringify({
            content: page,
            type: $626b24686b57d8cb$export$2e2bcd8739ae039.WS_EVENTS.GET_OLD
        }));
    }
    _onOpen() {
        this._socket.onopen = ()=>{
            console.log("Successfully connected to WS");
            this.getOldMessages();
        };
    }
    _onMessage() {
        this._socket.onmessage = (event)=>{
            const jsonData = JSON.parse(event.data);
            if ($626b24686b57d8cb$export$2e2bcd8739ae039.SERVICE_MESSAGE_TYPES.includes(jsonData.type)) return;
            console.log("Receved data", event, jsonData);
            let messages;
            messages = jsonData;
            this.eventBus.emit($626b24686b57d8cb$export$2e2bcd8739ae039.EVENTS.WS_MESSAGES_ARRIVED, messages);
        };
    }
    _onError() {
        this._socket.onerror = (event)=>{
            console.log("Error", event);
        };
    }
    _onClose() {
        this._socket.onclose = (event)=>{
            if (event.wasClean) console.log("Closed connection");
            else console.log("Connection interrupted");
        };
    }
}


const $987e590cc6bf0cd5$export$a4f9cbe45cc4db7e = async (dispatch)=>{
    const res = await (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).getChats();
    if (res) dispatch({
        chats: res
    });
    console.log("CHATS", res);
};
const $987e590cc6bf0cd5$export$960231cc1da1db8c = async (dispatch, state, action)=>{
    const res = await (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).getChatByTitle(action.title);
    if (res.length > 0) (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).getToken(res[0].id).then((token)=>{
        dispatch({
            currentChat: {
                ...res[0],
                avatar: action.avatar,
                token: token
            }
        });
    });
    else {
        (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).createChat({
            title: action.title
        }).then((res)=>{
            (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).addUserToChat(action.id, res.id);
            window.store.dispatch($987e590cc6bf0cd5$export$960231cc1da1db8c, action);
        });
        return true;
    }
};
const $987e590cc6bf0cd5$export$b143087014e9bfff = async (dispatch, state, chatId)=>{
    const res = await (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).deleteChat(chatId);
    if (res) window.store.dispatch({
        chats: window.store.getState().chats?.filter((chat)=>chat.id !== chatId),
        currentChat: undefined
    });
};
const $987e590cc6bf0cd5$export$27d03c584cd5b2eb = async (dispatch, state, action)=>{
    console.log("DATA", action);
    const res = await (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).changeAvatar(action);
    console.log("res", res);
    if (res) {
        console.log("NEW OBJECT", {
            ...window.store.getState().currentChat,
            avatar: res.avatar
        });
        dispatch({
            currentChat: {
                ...window.store.getState().currentChat,
                avatar: res.avatar
            },
            chats: window.store.getState().chats?.map((chat)=>{
                if (chat.id === res.id) return {
                    ...chat,
                    avatar: res.avatar
                };
                else return chat;
            })
        });
    }
};
const $987e590cc6bf0cd5$export$c5409e4974f42818 = async (user, chatId)=>{
    const token = await (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).getToken(chatId);
    return new (0, $626b24686b57d8cb$export$2e2bcd8739ae039)(user, chatId, token);
};


class $5f43d472c2e48f2e$var$MainPage extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(props){
        super(props);
        if (!window.store.getState().chats) window.store.dispatch((0, $987e590cc6bf0cd5$export$a4f9cbe45cc4db7e));
    }
    render() {
        // language=hbs
        return `
        <main class="main">
            {{{ChatContacts}}}
            {{{ChatMessages currentChat=currentChat}}}
        </main>
    `;
    }
}
const $5f43d472c2e48f2e$export$ceaf35c25d4b1fe2 = (0, $f567a0b93f9fb86a$export$570a1526675f2c4b)($5f43d472c2e48f2e$var$MainPage);







class $2aa7b8afb325bb77$export$31641b61980e511f extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(){
        super();
        this.setProps({
            onClick: ()=>{
                window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Chat);
            }
        });
    }
    render() {
        return `
            <main class="error-page">
                <div class="error-page__container">
                    <h1 class="error-page__status">404</h1>
                    <h2 class="error-page__message">Не туда попали</h2>
                    {{{Button text="Назад к чатам" className="error-page__button" onClick=onClick}}}
                </div>
            </main>
         `;
    }
}









class $b50a023a0c8ea3f6$var$ProfilePage extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            redirectToProfileChangeValues: ()=>{
                this.props.router.go((0, $88b977da1f221345$export$cd891b82501bb412).ProfileSettings);
            },
            redirectToProfileChangePassword: ()=>{
                this.props.router.go((0, $88b977da1f221345$export$cd891b82501bb412).ChangePassword);
            },
            redirectQuitProfile: ()=>{
                (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).logout();
                this.props.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Login);
            },
            redirectBack: ()=>{
                this.props.router.back();
            }
        });
        console.log("THIS", this);
    }
    render() {
        return `
      <main class="profile">
        <div class="profile__container">
            <div>
            {{{ChangeAvatar src="${this.props.user?.avatar}"}}}
            <h1 class="profile__container_title">{{user.displayName}}</h1>
            </div>
            <form class="profile__form">
            {{!------- ПОЧТА -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                <p class="profile__form__field__value">{{user.firstName}}</p>
            </div>

            {{!------- ЛОГИН -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Логин</label>
                <p class="profile__form__field__value">{{user.login}}</p>
            </div>

            {{!------- ИМЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя</label>
                <p class="profile__form__field__value">{{user.firstName}}</p>
            </div>

            {{!------- ФАМИЛИЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Фамилия</label>
                <p class="profile__form__field__value">{{user.secondName}}</p>
            </div>
            
            {{!------- ИМЯ В ЧАТЕ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя в чате</label>
                <p class="profile__form__field__value">{{user.displayName}}</p>
            </div>

            {{!------- ТЕЛЕФОН -------}}
            <div class="profile__form__field no-border">
                <label class="profile__form__field__label">Телефон</label>
                <p class="profile__form__field__value default-font">{{user.phone}}</p>
            </div>
            </form>

            <div>
            {{!------- ИЗМЕНИТЬ ДАННЫЕ -------}}
            <div class="profile__form__field">
                {{{Button text="Изменить данные" className="profile-change-values blue" onClick=redirectToProfileChangeValues}}}
            </div>
            
            {{!------- ИЗМЕНИТЬ ПАРОЛЬ -------}}
            <div class="profile__form__field">
                {{{Button text="Изменить пароль" className="profile-change-values blue" onClick=redirectToProfileChangePassword}}}
            </div>

            {{!------- ВЫЙТИ -------}}
            <div class="profile__form__field no-border">
                {{{Button text="Выйти" className="profile-change-values red" onClick=redirectQuitProfile}}}
            </div> 
            {{!------- LINK BACK TO CHATS -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
            </div>
        </div>
     </main>
    `;
    }
}
const $b50a023a0c8ea3f6$export$120c0e7b1bef3ec7 = (0, $34a895a60f8f63d4$export$369b6b2b30582e8e)((0, $4cb14a8771ecdce6$export$c605750379d8bc00)((0, $77eeb8d2c47f9696$export$186e7271a5553fd7)($b50a023a0c8ea3f6$var$ProfilePage)));







class $0896c1db80a2140a$export$5d5f670aa4440fd0 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(){
        super();
        this.setProps({
            onClick: ()=>{
                window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Chat);
            }
        });
    }
    render() {
        return `
            <main class="error-page">
                <div class="error-page__container">
                    <h1 class="error-page__status">500</h1>
                    <h2 class="error-page__message">Стараемся все исправить</h2>
                    {{{Button text="Назад к чатам" className="error-page__button" onClick=onClick}}}
                </div>
            </main>
         `;
    }
}











const $30cf6208a9d6910a$export$19245f3241d03f1c = {
    changeValues: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/user/profile", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        if (res.status !== 200) return JSON.parse(res.responseText);
        return true;
    },
    changePassword: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/user/password", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        console.log("RESPONSE", res);
        if (res.status !== 200) return JSON.parse(res.responseText);
        return true;
    },
    changeAvatar: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/user/profile/avatar", {
            includeCredentials: true,
            data: data
        });
        console.log(data, res);
        return true;
    },
    usersSearch: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().post("/user/search", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        console.log("RESPONSE", res);
        return JSON.parse(res.responseText);
    }
};





const $33707c9830400a63$export$a0576ebac17c5a0 = {
    changePassword: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/user/password", {
            includeCredentials: true,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        });
        console.log(res);
        if (res.status !== 200) return false;
        return true;
    },
    changeAvatar: async (data)=>{
        const res = await (0, $d32ca8009394484b$export$5767f363d4830f89).getInstance().put("/user/profile/avatar", {
            includeCredentials: true,
            data: data
        });
        console.log(data, res);
        return true;
    }
};
const $33707c9830400a63$export$2f2cc145bf0efa90 = async (dispatch, state, action)=>{
    dispatch({
        isLoading: true
    });
    const response = await (0, $30cf6208a9d6910a$export$19245f3241d03f1c).changeValues(action);
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch({
            isLoading: false,
            formError: response.reason
        });
        return;
    }
    const responseUser = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).getUser();
    dispatch({
        isLoading: false,
        formError: null
    });
    dispatch({
        user: (0, $1fd43d9c112668c3$export$88dcd5c1adae8021)(responseUser)
    });
    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Profile);
};
const $33707c9830400a63$export$99d837dc30eb1ef7 = async (dispatch, state, action)=>{
    dispatch({
        isLoading: true
    });
    const response = await (0, $30cf6208a9d6910a$export$19245f3241d03f1c).changePassword(action);
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch({
            isLoading: false,
            formError: response.reason
        });
        return;
    }
    dispatch({
        isLoading: false,
        formError: null
    });
    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Profile);
};
const $33707c9830400a63$export$8e2f77dbb1da9296 = async (dispatch, state, action)=>{
    dispatch({
        isLoading: true
    });
    const response = await (0, $30cf6208a9d6910a$export$19245f3241d03f1c).changeAvatar(action);
    if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) {
        dispatch({
            isLoading: false,
            formError: response.reason
        });
        return;
    }
    dispatch({
        isLoading: false,
        formError: null
    });
};
const $33707c9830400a63$export$c996479cb76ab18b = async (dispatch, state, action)=>{
    const response = await (0, $30cf6208a9d6910a$export$19245f3241d03f1c).usersSearch(action);
    console.log("RES", response);
    dispatch({
        chats: response.map((item)=>(0, $1fd43d9c112668c3$export$88dcd5c1adae8021)({
                ...item,
                fromSearch: true
            }))
    });
};


class $4c0ae98585ede1ef$var$ProfileChangePasswordPage extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            values: {
                oldPasswordValue: "",
                newPasswordValue: "",
                check_passwordValue: ""
            },
            formError: ()=>this.props.store.getState().formError,
            redirectBack: ()=>{
                (0, $18a724cc7e1bc394$export$5375cda95f0b0eb4).back();
            },
            onInput: (e)=>{
                const inputEl = e.target;
                const inputRef = inputEl.name + "InputRef";
                const errorRef = inputEl.name + "ErrorRef";
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: inputEl.name,
                        value: String(inputEl.value)
                    }
                ]);
                this.refs[inputRef].refs[errorRef].setProps({
                    text: errorMessage.text
                });
            },
            onSubmit: ()=>{
                //Названия элементов для последующего маппинга в { name:имя(отсюда как раз), element: элемент }
                const arrayOfInputsName = [
                    "oldPassword",
                    "newPassword",
                    "check_password"
                ];
                //Сам маппинг
                const arrayOfHtmlElements = arrayOfInputsName.map((name)=>{
                    return {
                        name: name,
                        element: this.element?.querySelector(`input[name="${name}"]`)
                    };
                });
                const NamesToArrayOfHTMLElements = (names)=>{
                    return names.map((name)=>{
                        return {
                            name: name,
                            element: this.element?.querySelector(`input[name="${name}"]`)
                        };
                    });
                };
                NamesToArrayOfHTMLElements.bind(this);
                //Проверяем наличие ошибок(Маппинг помогает упростить запрос)
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)(arrayOfHtmlElements.map((item)=>{
                    return {
                        type: item.element.name,
                        value: item.element.value
                    };
                }));
                //Если ошибка есть - находим нужный элемент в refs, далее реф его ошибки, далее меняем текст на текст ошибки
                if (errorMessage.text) this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
                    text: errorMessage.text
                });
                else if (arrayOfHtmlElements[1].element.value !== arrayOfHtmlElements[2].element.value) this.refs["check_passwordInputRef"].refs["check_passwordErrorRef"].setProps({
                    text: "Пароли не совпадают"
                });
                else {
                    this.setProps({
                        ...this.props,
                        values: {
                            oldPasswordValue: arrayOfHtmlElements[0].element.value,
                            newPasswordValue: arrayOfHtmlElements[1].element.value,
                            check_passwordValue: arrayOfHtmlElements[2].element.value
                        }
                    });
                    const formData = arrayOfHtmlElements.filter(({ name: name  })=>name !== "check_password").reduce((acc, item)=>Object.assign(acc, {
                            [item.name]: item.element.value
                        }), {});
                    console.log("Форма готова к отправке, данные: ", formData);
                    this.props.store.dispatch((0, $33707c9830400a63$export$99d837dc30eb1ef7), formData);
                }
            }
        });
    }
    render() {
        return `
        <main class="profile">
            <div class="profile__container">
            <div>
                {{{ChangeAvatar src="${this.props.user?.avatar}"}}}
                <h1 class="profile__container_title">{{user.displayName}}</h1>
            </div>
            <form class="profile__form">
            {{!------- СТАРЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Старый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="oldPassword" 
                    value=values.oldPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите старый пароль"
                    ref="oldPasswordInputRef"
                    errorRef="oldPasswordErrorRef"
                }}}
                </div>

            {{!------- НОВЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Новый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="newPassword" 
                    value=values.newPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите новый пароль"
                    ref="newPasswordInputRef"
                    errorRef="newPasswordErrorRef"
                }}}
                </div>

            {{!------- ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Повторите новый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="check_password" 
                    value=values.check_passwordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Повторите новый пароль"
                    ref="check_passwordInputRef"
                    errorRef="check_passwordErrorRef"
                }}}
                </div>
                {{{ErrorFromServer text=formError}}}
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
                {{{Button text="Сохранить" className="custom-button blue mt220" onClick=onSubmit}}}
            </form>

            </div>
        </main>
    `;
    }
}
const $4c0ae98585ede1ef$export$3816d479340d863a = (0, $34a895a60f8f63d4$export$369b6b2b30582e8e)((0, $4cb14a8771ecdce6$export$c605750379d8bc00)((0, $77eeb8d2c47f9696$export$186e7271a5553fd7)($4c0ae98585ede1ef$var$ProfileChangePasswordPage)));





let $5211e3debc8b89bb$export$b714373eb9ab036b;
(function(Screens) {
    Screens["Login"] = "login";
    Screens["Profile"] = "profile";
    Screens["SignUp"] = "signUp";
    Screens["Main"] = "main";
    Screens["NotFound"] = "notFound";
    Screens["ServerError"] = "serverError";
    Screens["ProfileChangePassword"] = "profileChangePassword";
    Screens["ProfileChangeValues"] = "profileChangePassword";
})($5211e3debc8b89bb$export$b714373eb9ab036b || ($5211e3debc8b89bb$export$b714373eb9ab036b = {}));
const $5211e3debc8b89bb$var$map = {
    [$5211e3debc8b89bb$export$b714373eb9ab036b.Login]: (0, $08966ababee588cf$export$f14c0e3f98d164c0),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.Profile]: (0, $b50a023a0c8ea3f6$export$120c0e7b1bef3ec7),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.SignUp]: (0, $d4ff0f3b3dffba08$export$265471dcab9022d3),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.Main]: (0, $5f43d472c2e48f2e$export$ceaf35c25d4b1fe2),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.NotFound]: (0, $2aa7b8afb325bb77$export$31641b61980e511f),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.ServerError]: (0, $0896c1db80a2140a$export$5d5f670aa4440fd0),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.ProfileChangePassword]: (0, $4c0ae98585ede1ef$export$3816d479340d863a),
    [$5211e3debc8b89bb$export$b714373eb9ab036b.ProfileChangeValues]: (0, $4c0ae98585ede1ef$export$3816d479340d863a)
};
const $5211e3debc8b89bb$export$ab4c555dd1d60530 = (screen)=>{
    return $5211e3debc8b89bb$var$map[screen];
};





const $d86f0b59b1b0f0a9$var$routes = [
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).Login,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).Login,
        shouldAuthorized: false,
        shouldGuest: true
    },
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).SignUp,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).SignUp,
        shouldAuthorized: false,
        shouldGuest: true
    },
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).Chat,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).Main,
        shouldAuthorized: true,
        shouldGuest: false
    },
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).Profile,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).Profile,
        shouldAuthorized: true,
        shouldGuest: false
    },
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).ProfileSettings,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).ProfileChangeValues,
        shouldAuthorized: true,
        shouldGuest: false
    },
    {
        path: (0, $88b977da1f221345$export$cd891b82501bb412).ChangePassword,
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).ProfileChangePassword,
        shouldAuthorized: true,
        shouldGuest: false
    },
    {
        path: "*",
        block: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).NotFound,
        shouldAuthorized: false
    }, 
];
function $d86f0b59b1b0f0a9$export$cf7ee87ede64229c(router, store) {
    $d86f0b59b1b0f0a9$var$routes.forEach((route)=>{
        router.use(route.path, ()=>{
            const isAuthorized = Boolean(store.getState().user);
            const currentScreen = Boolean(store.getState().screen);
            if (isAuthorized && route.shouldGuest) {
                window.history.pushState({}, "", "/messenger");
                console.log("Redirect to MAIN");
                store.dispatch({
                    screen: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).Main
                });
                return;
            }
            if (isAuthorized || !route.shouldAuthorized) {
                store.dispatch({
                    screen: route.block
                });
                return;
            }
            if (!currentScreen) {
                console.log("go to login");
                store.dispatch({
                    screen: (0, $5211e3debc8b89bb$export$b714373eb9ab036b).Login
                });
            }
        });
    });
    store.on("changed", (prevState, nextState)=>{
        if (!prevState.appIsInited && nextState.appIsInited) router.start();
        if (prevState.screen !== nextState.screen) {
            const Page = (0, $5211e3debc8b89bb$export$ab4c555dd1d60530)(nextState.screen);
            (0, $6c8cc3259de8e17b$export$2e2bcd8739ae039)(new Page({}));
            document.title = `${Page.componentName}`;
        }
    });
}





class $7d27fdbb81137d74$export$f99233281efd08a0 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Title";
    constructor({ title: title , subtitle: subtitle  }){
        super({
            title: title,
            subtitle: subtitle
        });
    }
    render() {
        // language=hbs
        return `
    <div class="greetings">
        <h1 class="greetings-title">{{title}}</h1>
        <h2 class="greetings-subtitle">{{subtitle}}</h2>
    </div
    `;
    }
}






class $1d4d90f758478686$export$353f5b6fc5456de1 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Button";
    constructor({ text: text , className: className , onClick: onClick  }){
        super({
            text: text,
            className: className,
            events: {
                click: onClick
            }
        });
    }
    render() {
        // language=hbs
        return `
        <button class="{{className}}" type="button">{{text}}</button>
    `;
    }
}






class $2a97271d229e31eb$export$f5b8910cec6cf069 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Input";
    constructor({ onInput: onInput , onFocus: onFocus , onBlur: onBlur , ...props }){
        super({
            ...props,
            events: {
                input: onInput,
                focus: onFocus,
                blur: onBlur
            }
        });
    }
    render() {
        // language=hbs
        return `
        <input name="{{name}}" {{#if autofocus}}tabindex="-1"{{/if}} autocomplete="off" value="{{value}}" class="{{inputClassName}}" type="{{type}}" placeholder="{{placeholder}}">
    `;
    }
}






class $8bb37df685662ce7$export$edf27be85e5f6da0 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Error";
    constructor(props){
        super(props);
    }
    render() {
        // language=hbs
        return `
      <div class="{{#if text}}active{{/if}} ${this.props.className} error">{{#if text}}{{text}}{{/if}}</div>
    `;
    }
}







class $21fa804a6332661f$export$cf15e9b5584f4156 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ControlledInput";
    constructor(props){
        super(props);
        if (!props.onBlur) this.setProps({
            onBlur: (e)=>{
                const inputEl = e.target;
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: inputEl.name,
                        value: inputEl.value
                    }
                ]);
                const errorReference = props.errorRef;
                this.refs[errorReference].setProps({
                    text: errorMessage.text
                });
                setTimeout(()=>{
                    this.refs[errorReference].setProps({
                        text: ""
                    });
                }, 5000);
            }
        });
    }
    render() {
        // language=hbs
        return `
      <div class="input {{divClassName}}">
        {{{Input 
            name="{{name}}" 
            type="{{type}}"
            autofocus=autofocus
            inputClassName="{{inputClassName}}"
            placeholder="{{placeholder}}" 
            onInput=onInput 
            onFocus=onFocus 
            onBlur=onBlur 
            value=value
        }}}
        {{{Error className=errorClassName ref=errorRef text=error}}}
      </div>
    `;
    }
}









class $0f69e21545bb949a$export$9d0040f1ec8e3430 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChangeAvatar";
    constructor(props){
        super({
            ...props,
            events: {
                mouseover: ()=>{
                    document.querySelector(".change-avatar")?.classList.add("isHovered");
                    document.querySelector(".change-avatar__image")?.classList.add("isHovered");
                },
                mouseleave: ()=>{
                    document.querySelector(".change-avatar")?.classList.remove("isHovered");
                    document.querySelector(".change-avatar__image")?.classList.remove("isHovered");
                },
                change: (e)=>{
                    const inputEl = e.target;
                    if (inputEl.files) {
                        document.querySelector('[data-label="avatar"]').src = window.URL.createObjectURL(inputEl.files[0]);
                        let photo = inputEl.files[0];
                        let formData = new FormData();
                        formData.append("avatar", photo);
                        if (props.type === "USER") (0, $30cf6208a9d6910a$export$19245f3241d03f1c).changeAvatar(formData);
                        else {
                            formData.append("chatId", JSON.stringify(props.currentChatId));
                            window.store.dispatch((0, $987e590cc6bf0cd5$export$27d03c584cd5b2eb), formData);
                        }
                    }
                }
            }
        });
    }
    render() {
        // language=hbs
        return `
        <div class="change-avatar">
            <img src=https://ya-praktikum.tech/api/v2/resources{{src}} onerror="this.onerror=null;this.src='${$7b8faa819810a1b0$exports}';" class="change-avatar__image" data-label="avatar" alt="Моя фотография"/>
            <input type="file" class="change-avatar__input"/>
        </div>
    `;
    }
}






class $5076dfb44da02ad0$export$a9308f1a0e9624a3 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ErrorFromServer";
    constructor(props){
        super(props);
    }
    render() {
        // language=hbs
        return `
      <div class="error-from-server {{className}}">{{#if text}}{{text}}{{/if}}</div>
    `;
    }
}








class $0fdc6d5eb8a63666$export$d295da43c2cd8369 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatContacts";
    constructor(props){
        super();
        this.setProps({
            ...props,
            searchValue: "",
            onInput: (e)=>{
                const inputEl = e.target;
                // this.setProps({
                //   ...props,
                //   searchValue: inputEl.value,
                // })
                if (inputEl.value === "") window.store.dispatch((0, $987e590cc6bf0cd5$export$a4f9cbe45cc4db7e));
                else window.store.dispatch((0, $33707c9830400a63$export$c996479cb76ab18b), {
                    login: inputEl.value
                });
            },
            onBlur: ()=>{
                console.log("123");
                window.store.dispatch({
                    contacts: null
                });
            },
            onFocus: ()=>{
                window.store.dispatch((0, $33707c9830400a63$export$c996479cb76ab18b), {
                    login: ""
                });
                console.log("GFDFG");
            },
            onClick: (e)=>{
                const inputEl = e.target;
            }
        });
    }
    render() {
        // language=hbs
        return `
    <aside class="contacts">
        {{{ContactLink text="Профиль >"}}}
        {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            onBlur=onBlur
            type="text" 
            value=searchValue
            inputClassName="search-input"
            divClassName="short"
            placeholder="Поиск"
            ref="searchResultsInputRef"
        }}}
        {{{ContactsList}}}
    </aside>
    `;
    }
}






class $6e69fbee6df5e2c0$export$c006a28d168c6f04 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ContactSearchInput";
    constructor(props){
        super({
            ...props,
            events: {
                input: props.onInput
            }
        });
    }
    render() {
        // language=hbs
        return `
    <div class="contact-search-input">
        <input type="text" value="{{searchValue}}"  placeholder="&#xF002; Поиск" class="search-input">
    </div>
    `;
    }
}




var $2181e1e14a27d999$exports = {};

$2181e1e14a27d999$exports = new URL((parcelRequire("dWyTn")).resolve("k6Tkz"), import.meta.url).toString();



class $883355792d44951a$var$ContactSearchResults extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ContactSearchResults";
    constructor(props){
        super(props);
        this.setProps(props);
        console.log(this, this.props.store.dispatch);
    }
    render() {
        // language=hbs
        return `
    <div class="search-results">
        {{#if store.contacts}}
            {{#each store.contacts }}
            <div class="search-results__item">
                <img src=https://ya-praktikum.tech/api/v2/resources{{this.avatar}} onerror="this.onerror=null;this.src='${$2181e1e14a27d999$exports}';" class="search-results__item__image" data-label="avatar" alt="Моя фотография"/>
                 <span>{{this.login}}</span>
            </div>
            {{/each}}
        {{/if}}
    </div>

    `;
    }
}
function $883355792d44951a$var$mapUserToProps(state) {
    return {
        userSearchResult: state.userSearchResult
    };
}
const $883355792d44951a$export$6b57b62d56732e39 = (0, $4cb14a8771ecdce6$export$c605750379d8bc00)($883355792d44951a$var$ContactSearchResults, $883355792d44951a$var$mapUserToProps);







class $43afbd1842942e06$export$96c211badc9d5a98 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ContactLink";
    constructor(props){
        super({
            ...props,
            events: {
                click: ()=>{
                    window.router.go((0, $88b977da1f221345$export$cd891b82501bb412).Profile);
                }
            }
        });
    }
    render() {
        return `
        <a class="contacts__link">{{text}}</a>
      `;
    }
}







class $695295e1b3776625$export$c55b78c5e11b8fb4 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatFooter";
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            error: "",
            messageValue: "",
            onInput: (e)=>{
                const inputEl = e.target;
                const inputRef = inputEl.name + "InputRef";
                const errorRef = inputEl.name + "ErrorRef";
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: inputEl.name,
                        value: inputEl.value
                    }
                ]);
                this.refs[inputRef].refs[errorRef].setProps({
                    text: errorMessage.text
                });
            },
            onSubmit: ()=>{
                const messageEl = this.element?.querySelector("input[name='message']");
                const errorMessage = (0, $d5cba6aa0bd8a776$export$ed692cabb252e59b)([
                    {
                        type: "message",
                        value: messageEl.value
                    }
                ]);
                if (errorMessage.text) this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
                    text: errorMessage.text
                });
                else {
                    this.setProps({
                        ...props,
                        error: "",
                        messageValue: messageEl.value
                    });
                    props.socket.send(messageEl.value);
                    console.log("Сообщение готово к отправке, данные: ", {
                        Message: messageEl.value
                    });
                }
            }
        });
        this.element?.querySelector("input[name='message']")?.addEventListener("keypress", (event)=>{
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
                // Cancel the default action, if needed
                event.preventDefault();
                this.props.onSubmit();
            }
        });
    }
    componentDidMount() {
        const messageEl = this.element?.querySelector("input[name='message']");
        messageEl.focus();
    }
    render() {
        // language=hbs
        return `
        <footer class="messages__footer">
            <button class="messages__footer__import-files"></button>
            {{{ControlledInput 
                onInput=onInput 
                type="text" 
                name="message" 
                value=messageValue 
                autofocus=true
                placeholder="Сообщение" 
                inputClassName="messages__footer__input" 
                divClassName="message-input" 
                errorClassName="message-error"
                ref="messageInputRef" 
                errorRef="messageErrorRef" 
            }}}
            {{{Button className="messages__footer__send-message" onClick=onSubmit}}}
        </footer>
    `;
    }
}







class $371e17ee4a072cc7$export$1263ff8fe28ec69f extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatHeader";
    constructor(props){
        super(props);
    }
    render() {
        // language=hbs
        return `
        <header class="messages__header">
            <div class="messages__header__person">
            <img src=https://ya-praktikum.tech/api/v2/resources{{currentChat.avatar}} onerror="this.onerror=null;this.src='${$2181e1e14a27d999$exports}';" alt="Фотография собеседника" class="messages__header__person__image"/>
            <span>{{currentChat.title}}</span>
            </div>
            {{#if currentChat}}
                {{{ChatHeaderOptions}}}
            {{/if}}
        </header>
    `;
    }
}






class $4195ccd288add7ff$export$4804842d7b6b7901 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatMainBlock";
    constructor(props){
        super(props);
        console.log("IS LOADING?", this.props.isLoading);
    }
    render() {
        // language=hbs
        return `
        <div class="messages__main-block"> 
        {{#if isLoading}}
            {{{Loader}}}
        {{else}}
            {{#if chatMessages}}
                {{#each chatMessages}}
                    {{#if this.whenDate}}
                    <span class="when-date">{{this.whenDate}}</span>
                    {{/if}}
                    <div class="message {{#ifNotMyMessage this.user_id}}friend__message{{/ifNotMyMessage}}">
                        <p class="message__text">{{this.content}}</p>
                        <time class="message__time">{{this.customTime}}</time>
                    </div>
                {{/each}}
            {{/if}}
        {{/if}}
        
            
        </div>
    `;
    }
}






function $73fd5f007263fd05$export$57e73ea84b51baf0(message, array, index) {
    const date = new Date(message.time);
    const currentDate = new Date(Date.now());
    let minutes = date.getMinutes();
    const months = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
    let day = Number(date.toString().slice(8, 10));
    let prevDay = Number(new Date(array[index + 1]?.time).toString().slice(8, 10));
    if (!prevDay) message.whenDate = `${Number(date.toString().slice(8, 10))} ${months[date.getMonth()]}`;
    else if (day > prevDay) message.whenDate = `${Number(date.toString().slice(8, 10))} ${months[date.getMonth()]}`;
    if (message.whenDate === `${Number(currentDate.toString().slice(8, 10))} ${months[currentDate.getMonth()]}`) message.whenDate = "Сегодня";
    return {
        ...message,
        customTime: `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`
    };
}




class $77063c1e0041fbfc$var$ChatMessages extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatMessages";
    isWebSocketConnected = false;
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            chatMessages: [],
            _socketTransport: undefined,
            isLoading: false
        });
    }
    componentDidMount() {
        if (this.props.currentChat) {
            this.props._socketTransport = new (0, $626b24686b57d8cb$export$2e2bcd8739ae039)(this.props.user, this.props.currentChat.id, this.props.currentChat.token);
            this.props._socketTransport.eventBus.on((0, $626b24686b57d8cb$export$2e2bcd8739ae039).EVENTS.WS_MESSAGES_ARRIVED, this.serveWSIncomingMessages.bind(this));
            this.props._socketTransport.start();
        }
    }
    serveWSIncomingMessages(messagesList) {
        this.setProps({
            ...this.props,
            isLoading: true
        });
        if (Array.isArray(messagesList)) messagesList = messagesList.map((message, index)=>{
            return (0, $73fd5f007263fd05$export$57e73ea84b51baf0)(message, messagesList, index);
        }).reverse();
        else messagesList = (0, $73fd5f007263fd05$export$57e73ea84b51baf0)(messagesList, this.props.chatMessages, this.props.chatMessages.length - 2);
        this.setProps({
            ...this.props,
            chatMessages: this.props.chatMessages.concat(messagesList),
            isLoading: false
        });
        let objDiv = document.querySelector(".messages__main-block");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    componentWillUnmount() {
        this.props._socketTransport?.stop();
    }
    render() {
        // language=hbs
        return `
        <div class="messages">
            {{{ChatHeader currentChat=currentChat}}}
            {{{ChatMainBlock chatMessages=chatMessages isLoading=isLoading}}}
            {{{ChatFooter socket=_socketTransport}}}
            {{{ChangeChatTitleModal currentChat=currentChat socket=_socketTransport}}}
            {{{DeleteChatModal currentChat=currentChat }}}
        </div>
    `;
    }
}
const $77063c1e0041fbfc$export$148ad0a1a7d03440 = (0, $77eeb8d2c47f9696$export$186e7271a5553fd7)($77063c1e0041fbfc$var$ChatMessages);





const $2aa4e78f17d7163a$export$49d5fc8cba920a0 = {
    appIsInited: false,
    isLoading: false,
    screen: null,
    formError: null,
    user: null
};





async function $3bead4617034e86b$export$bec0ec21ab4579a(dispatch) {
    // Ручкая задержка для демонстрации загрузочного экрана
    await new Promise((r)=>setTimeout(r, 100));
    try {
        const response = await (0, $acfbc1c54750817e$export$39813f5a3cc2bc5a).getUser();
        dispatch((0, $987e590cc6bf0cd5$export$a4f9cbe45cc4db7e));
        if ((0, $e37ba36a6a1abdd9$export$5e63894f961a3223)(response)) return;
        dispatch({
            user: (0, $1fd43d9c112668c3$export$88dcd5c1adae8021)(response)
        });
    } catch (err) {
        console.error("ОШИБКА", err);
    } finally{
        dispatch({
            appIsInited: true
        });
    }
}






class $bd100ffbf7118e08$export$86e6771ca9311520 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatItem";
    constructor(props){
        super({
            ...props,
            events: {
                click: (e)=>{
                    const inputEl = e.target;
                    console.log("CHAT ID");
                    console.log("CHAT123", props.chat);
                    if (props.fromSearch) window.store.dispatch((0, $987e590cc6bf0cd5$export$960231cc1da1db8c), {
                        id: props.chat.id,
                        avatar: props.chat.avatar,
                        title: `${props.chat.login}`
                    });
                    else (0, $76ab1306601d6176$export$4cb3a1b274fdb0b1).getToken(props.chat.id).then((token)=>{
                        window.store.dispatch({
                            currentChat: {
                                ...props.chat,
                                token: token
                            }
                        });
                    });
                    console.log(props.chat);
                }
            }
        });
    }
    render() {
        return `
        <div class="contacts__list__item" id="{{id}}">
            <img src=https://ya-praktikum.tech/api/v2/resources{{chat.avatar}} onerror="this.onerror=null;this.src='${$2181e1e14a27d999$exports}';" alt="Фотография пользователя" class="item__image"/>
            <div class="item__text">
                {{#if chat.login}}
                    <span class="item__text__name">{{chat.login}}</span>
                {{else}}
                    <span class="item__text__name">{{chat.title}}</span>
                {{/if}}
            </div>
            <div class="item__info">
                <time class="item__info__time">{{this.customTime}}</time>
                {{#if this.missedMessages}}
                <span class="item__info__missed-messages">{{this.missedMessages}}</span>
                {{else}}
                <span class="item__info__missed-messages_empty">1</span>
                {{/if}}
            </div>
        </div>
      `;
    }
}






class $866f7cb4a9672e8e$export$f0e2294074009adb extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChatHeaderOptions";
    constructor(props){
        super({
            ...props,
            events: {
                mouseenter: ()=>{
                    const optionsDiv = document.querySelector(".messages__header__options");
                    console.log(optionsDiv);
                    optionsDiv.classList.add("active");
                },
                mouseleave: ()=>{
                    const optionsDiv = document.querySelector(".messages__header__options");
                    console.log(optionsDiv);
                    optionsDiv.classList.remove("active");
                }
            }
        });
        this.setProps({
            ...props,
            changeAvatarClick: ()=>{
                document.querySelector("#change-chat-avatar")?.classList.add("active");
            },
            deleteChatClick: ()=>{
                document.querySelector("#delete-chat")?.classList.add("active");
            }
        });
    }
    render() {
        // language=hbs
        return `
        <div class="messages__header__open-options">&#xF142;
            <div class="messages__header__options">
                {{{Button 
                    className="messages__header__options__button" 
                    text="Изменить аватар чата" 
                    onClick=changeAvatarClick
                }}}
                {{{Button 
                    className="messages__header__options__button" 
                    text="Удалить чат" 
                    onClick=deleteChatClick
                }}}
            </div>
        </div>
    `;
    }
}




class $cb037412248774cd$export$2b77a92f1a5ad772 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Modal";
    constructor(){
        super({
            events: {
                click: ()=>{
                    console.log("12345");
                }
            }
        });
    }
    componentDidMount(props) {
        document.getElementById("base")?.addEventListener("click", ()=>{
            console.log("12234532");
        });
        document.querySelector(".modal__body")?.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
    }
    render() {
        // language=hbs
        return `
        <div class="modal" id="base">
            <div class="modal__body">Привет!</div>
        </div>
    `;
    }
}




class $2207ba9090fe66b5$export$f3d15ab94c69f626 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ChangeChatTitleModal";
    constructor(props){
        super(props);
    }
    componentDidMount(props) {
        document.getElementById("change-chat-avatar")?.addEventListener("click", (e)=>{
            const modalDiv = e.target;
            modalDiv.classList.remove("active");
        });
        document.querySelector(".modal__body")?.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
    }
    render() {
        // language=hbs
        return `
        <div class="modal" id="change-chat-avatar">
            <div class="modal__body">
                <header class="modal__body__title">Изменить аватар чата {{currentChat.title}}</header>
                {{{ChangeAvatar src=currentChat.avatar currentChatId=currentChat.id}}}
            </div>
        </div>
    `;
    }
}





class $a37528449aaae178$export$5ad73570cc55f52a extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "DeleteChatModal";
    constructor(props){
        super(props);
        this.setProps({
            ...props,
            cancelDeleteClick: ()=>{
                const modalDiv = document.getElementById("delete-chat");
                modalDiv.classList.remove("active");
            },
            submitDeleteClick: ()=>{
                window.store.dispatch((0, $987e590cc6bf0cd5$export$b143087014e9bfff), props.currentChat.id);
            }
        });
    }
    componentDidMount(props) {
        document.getElementById("delete-chat")?.addEventListener("click", (e)=>{
            const modalDiv = e.target;
            modalDiv.classList.remove("active");
        });
        document.querySelector(".modal__body")?.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
    }
    render() {
        // language=hbs
        return `
        <div class="modal" id="delete-chat">
            <div class="modal__body">
                <header class="modal__body__title">Подтвердите удаление чата</header>
                <div>
                    {{{Button className="cancel-delete" onClick=cancelDeleteClick text="Отменить"}}}
                    {{{Button className="submit-delete" onClick=submitDeleteClick text="Удалить"}}}
                </div>
            </div>
        </div>
    `;
    }
}


const $7d01c3648082948e$var$modals = [
    (0, $cb037412248774cd$export$2b77a92f1a5ad772),
    (0, $2207ba9090fe66b5$export$f3d15ab94c69f626),
    (0, $a37528449aaae178$export$5ad73570cc55f52a)
];
var $7d01c3648082948e$export$2e2bcd8739ae039 = $7d01c3648082948e$var$modals;




class $78faa819229912a0$export$3b0d6d7590275603 extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "Loader";
    constructor(){
        super();
    }
    render() {
        // language=hbs
        return `
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `;
    }
}






function $e5275a62ea5f5771$export$d9e5202a22de6581(WrappedBlock) {
    // @ts-expect-error No base constructor has the specified
    return class extends WrappedBlock {
        static componentName = WrappedBlock.componentName || WrappedBlock.name;
        constructor(props){
            super({
                ...props,
                chats: window.store.getState().chats
            });
        }
        __onChangeChatsCallback = (prevState, nextState)=>{
            console.log("WITHCHATS", prevState.chats, nextState.chats);
            if (JSON.stringify(prevState.chats) !== JSON.stringify(nextState.chats)) // @ts-expect-error this is not typed
            this.setProps({
                ...this.props,
                chats: nextState.chats
            });
        };
        componentDidMount(props) {
            super.componentDidMount(props);
            window.store.on("changed", this.__onChangeChatsCallback);
        }
        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off("changed", this.__onChangeChatsCallback);
        }
    };
}


class $c6903bbd49386674$var$ContactsList extends (0, $9654315c65fc281a$export$2e2bcd8739ae039) {
    static componentName = "ContactsList";
    constructor(props){
        super(props);
        console.log("CHAT CONTACTS", this.props);
    }
    render() {
        // language=hbs
        return `
        <div class="contacts__list">
            {{#each chats}}
                {{{ChatItem fromSearch=this.fromSearch chat=this}}}
            {{/each}}
        </div>
    `;
    }
}
const $c6903bbd49386674$export$ccfabc72f6726f7e = (0, $e5275a62ea5f5771$export$d9e5202a22de6581)($c6903bbd49386674$var$ContactsList);




var $188f318fc22010c8$exports = {};

/* eslint max-len: 0 */ // TODO: eventually deprecate this console.trace("use the `babel-register` package instead of `babel-core/register`");
$188f318fc22010c8$exports = (parcelRequire("3qHnr"));


(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $7d27fdbb81137d74$export$f99233281efd08a0));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $1d4d90f758478686$export$353f5b6fc5456de1));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $2a97271d229e31eb$export$f5b8910cec6cf069));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $8bb37df685662ce7$export$edf27be85e5f6da0));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $5076dfb44da02ad0$export$a9308f1a0e9624a3));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $21fa804a6332661f$export$cf15e9b5584f4156));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $0f69e21545bb949a$export$9d0040f1ec8e3430));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $78faa819229912a0$export$3b0d6d7590275603));
$7d01c3648082948e$export$2e2bcd8739ae039.forEach((component)=>(0, $374963e531273dbe$export$2e2bcd8739ae039)(component));
//------РЕГИСТРЫ ДЛЯ ЧАТА
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $0fdc6d5eb8a63666$export$d295da43c2cd8369));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $6e69fbee6df5e2c0$export$c006a28d168c6f04));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $883355792d44951a$export$6b57b62d56732e39));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $0f69e21545bb949a$export$9d0040f1ec8e3430));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $43afbd1842942e06$export$96c211badc9d5a98));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $bd100ffbf7118e08$export$86e6771ca9311520));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $695295e1b3776625$export$c55b78c5e11b8fb4));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $866f7cb4a9672e8e$export$f0e2294074009adb));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $371e17ee4a072cc7$export$1263ff8fe28ec69f));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $4195ccd288add7ff$export$4804842d7b6b7901));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $c6903bbd49386674$export$ccfabc72f6726f7e));
(0, $374963e531273dbe$export$2e2bcd8739ae039)((0, $77063c1e0041fbfc$export$148ad0a1a7d03440));
(0, (/*@__PURE__*/$parcel$interopDefault($827edd0b99d22e08$exports))).registerHelper("ifNotMyMessage", function(arg1, options) {
    return arg1 !== window.store.getState()?.user?.id ? "friend__message" : "";
});
const $18a724cc7e1bc394$export$5375cda95f0b0eb4 = new (0, $eb04f011822db60d$export$8d4b08240fd1e0d)();
document.addEventListener("DOMContentLoaded", ()=>{
    const router = new (0, $eb04f011822db60d$export$8d4b08240fd1e0d)();
    const store = new (0, $70e35aadc369705a$export$390f32400eaf98c9)((0, $2aa4e78f17d7163a$export$49d5fc8cba920a0));
    window.router = router;
    window.store = store;
    (0, $d86f0b59b1b0f0a9$export$cf7ee87ede64229c)(router, store);
    //TODO: убрать store.on
    store.on("changed", (prevState, nextState)=>{
        console.log("%cstore updated", "background: #222; color: #bada55", nextState);
    });
    store.dispatch((0, $3bead4617034e86b$export$bec0ec21ab4579a));
});


